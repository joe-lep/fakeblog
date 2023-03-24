import React, { ReactNode, useId, useCallback, useMemo } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { RouteData } from '../../types';
import { InternalLink } from '../InternalLink';

type MenuOption = {
  id: string;
  label: ReactNode;
  action?: () => void;
  routeData?: RouteData;
}

type Props = {
  label?: ReactNode,
  options?: Array<MenuOption>;
};

export const OptionsMenu : React.FC<Props> = ({label = 'Options', options}) => {
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

    return options.map(item => (
      <MenuItem
        key={item.id}
        onClick={() => {
          if (item.action) {
            item.action();
          }

          handleClose();
        }}
      >
        {item.routeData ? (
          <InternalLink routeData={item.routeData}>
            {item.label}
          </InternalLink>
        ) : item.label}
      </MenuItem>
    ))
  }, [options, handleClose]);

  return (
    <div>
      <Button
        id={BUTTON_ID}
        aria-controls={MENU_ID}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        id={MENU_ID}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': BUTTON_ID,
        }}
      >
        {renderedOptions}
      </Menu>
    </div>
  );
};
