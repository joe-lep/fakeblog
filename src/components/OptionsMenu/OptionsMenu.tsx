import React, { ReactNode, useId, useCallback, useMemo, ComponentType } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { RouteData } from '../../types';
import { InternalLink } from '../InternalLink';

type MenuOption = {
  id: string;
  label: ReactNode;
  action?: () => void;
  routeData?: RouteData;
  pathParams?: any;
}

type Props = {
  label?: ReactNode,
  options?: Array<MenuOption>;
  ButtonComponent?: ComponentType<any>;
  buttonProps?: any;
  menuProps?: any;
};

export const OptionsMenu : React.FC<Props> = ({label = 'Options', options, ButtonComponent = Button, buttonProps, menuProps}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const id = useId();
  const BUTTON_ID = `${id}--button`;
  const MENU_ID = `${id}--menu`;

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const renderedOptions = useMemo(() => {
    if (!options) {
      return [];
    }

    return options.map(item => {
      const menuItem = (
        <MenuItem
          key={item.id}
          onClick={() => {
            if (item.action) {
              item.action();
            }

            handleClose();
          }}
        >
          {item.label}
        </MenuItem>
      );

      if (item.routeData) {
        return (
          <InternalLink key={item.id} routeData={item.routeData} pathParams={item.pathParams} color="inherit">
            {menuItem}
          </InternalLink>
        )
      }

      return menuItem;
    });
  }, [options, handleClose]);

  return (
    <div>
      <ButtonComponent
        id={BUTTON_ID}
        aria-controls={MENU_ID}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        {...buttonProps}
      >
        {label}
      </ButtonComponent>
      <Menu
        id={MENU_ID}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': BUTTON_ID,
        }}
        {...menuProps}
      >
        {renderedOptions}
      </Menu>
    </div>
  );
};
