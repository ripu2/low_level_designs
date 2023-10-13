import { Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

export const ParentContainer = styled(Box)(({}) => ({
  width: '100%',
//   opacity: 0.6
}));

export const RowContainer = styled(Box)(({}) => ({
  width: '100%',
  display: 'flex'
//   opacity: 0.6
}));

export const RowNameTypography = styled(Typography)(({}) => ({
    fontSize: '1em',
}));
