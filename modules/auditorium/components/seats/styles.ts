import { Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

export const ParentContainer = styled(Box)(({}) => ({
  width: '100%',
  display: 'flex',
  marginBottom: 15,
//   opacity: 0.6
}));

export const SeatContainer = styled(Box)(({}) => ({
  height: '3em',
  width: '3em',
  border: '1px solid white',
  borderRadius: 10,
  marginLeft: 10,
  marginRight: 10,
//   opacity: 0.6
}));

export const RowNameTypography = styled(Typography)(({}) => ({
    fontSize: '1em',
}));
