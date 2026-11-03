import { Box, Typography } from '@mui/material';
import React from 'react';

export function ActivityParam({
  title,
  icon,
  value,
  suffix
}: {
  title: string;
  value: string | number;
  suffix?: string;
  icon?: React.ReactElement;
}) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      {icon}
      <div>
        <Typography variant="caption" color="text.secondary" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="div">
          {value}
          {suffix ? ` ${suffix}` : ''}
        </Typography>
      </div>
    </Box>
  );
}
