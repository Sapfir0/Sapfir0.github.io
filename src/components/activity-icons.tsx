import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import NoTransferIcon from '@mui/icons-material/NoTransfer';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import SignalCellularConnectedNoInternet0BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0Bar';
import SignalCellularConnectedNoInternet1BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet1Bar';
import { Box, Tooltip } from '@mui/material';
import { EasyPublicTransportation, InternetAvailability } from '../lib/constants.ts';
import type { TActivity } from '../lib/types.ts';

function internetIcon(status: InternetAvailability) {
  switch (status) {
    case InternetAvailability.FullCover:
      return <SignalCellular3BarIcon color="disabled" />;
    case InternetAvailability.UnstableConnection:
      return <SignalCellularConnectedNoInternet1BarIcon color="disabled" />;
    case InternetAvailability.NoConnection:
      return <SignalCellularConnectedNoInternet0BarIcon color="disabled" />;
  }
}

function transportationIcon(status: EasyPublicTransportation) {
  switch (status) {
    case EasyPublicTransportation.ByTrain:
      return <DirectionsTransitIcon color="disabled" />;
    case EasyPublicTransportation.ByBus:
      return <DepartureBoardIcon color="disabled" />;
    case EasyPublicTransportation.PrivateTransfer:
      return <NoTransferIcon color="disabled" />;
  }
}

export function ActivityIcons({ activity }: { activity: TActivity }) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      <Tooltip title={`Internet availability: ${activity.internetAvailability}`}>
        {internetIcon(activity.internetAvailability)}
      </Tooltip>
      <Tooltip title={`Public transportation: ${activity.easyPublicTransportation}`}>
        {transportationIcon(activity.easyPublicTransportation)}
      </Tooltip>
    </Box>
  );
}
