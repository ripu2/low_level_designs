import { Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

export const HeaderContainer = styled(Box)(({}) => ({
  width: '100%',
  padding: 15,
//   opacity: 0.6
}));

export const HeaderTypography = styled(Typography)(({}) => ({
    fontSize: '1em',
    color: 'gray',
}));
