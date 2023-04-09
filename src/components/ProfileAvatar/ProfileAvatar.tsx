import React, { useMemo } from 'react';
import { Avatar, AvatarProps, useTheme } from '@mui/material';
import { Profile } from '../../types';

type Props = AvatarProps & {
  profile: Profile;
  isHeader?: boolean;
}

export const ProfileAvatar : React.FC<Props> = ({ profile, isHeader, ...props }) => {
  const theme = useTheme();

  const firstLetter = useMemo(() => {
    return profile.name.trim().charAt(0);
  }, [profile]);

  const colorFromString = useMemo(() => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < profile.name.length; i += 1) {
      hash = profile.name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }, [profile]);

  const sx = useMemo(() => {
    let result: any = {
      bgcolor: colorFromString,
    };

    if (isHeader) {
      const h2Size = theme.typography.h2.fontSize;
      const avatarDim = `calc(${h2Size} * 2)`;
      const fontSize = `calc(${h2Size} * 1.25)`;

      result = {
        ...result,
        height: avatarDim,
        width: avatarDim,
        fontSize,
      };
    }

    return result;
  }, [colorFromString, isHeader, theme]);

  return (
    <Avatar {...props} sx={sx}>
      {firstLetter}
    </Avatar>
  );
};
