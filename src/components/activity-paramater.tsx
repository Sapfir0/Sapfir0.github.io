import { Box, Typography } from '@mui/material';
import React from 'react';

export function ActivityParam({ title, icon, value, suffix }: {
  title: string,
  value: string | number,
  suffix?: string
  icon?: React.ReactElement
}) {
  return <Box
    sx={{
      display: 'inline-flex',
      gap: '5px'
    }}
  >
    {icon}
    <div>
      <Typography>{title}</Typography>
      <Typography>{value} {suffix ? suffix : undefined}</Typography>
    </div>
  </Box>;
}
