import { Box, Typography } from '@mui/material';
import React from 'react';

export function ActivityParam({
  title,
  icon,
  value,
  suffix,
  description
}: {
  title: string;
  value: string | number;
  description?: string;
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
        {description && (
          <Typography variant="body2" component="div">
            {description}
          </Typography>
        )}
      </div>
    </Box>
  );
}
