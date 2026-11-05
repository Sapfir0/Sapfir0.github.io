import { Box } from '@mui/material';
import { EasyPublicTransportation, InternetAvailability } from '../const.ts';
import type { TActivity } from '../types.ts';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import NoTransferIcon from '@mui/icons-material/NoTransfer';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import SignalCellularConnectedNoInternet1BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet1Bar';
import SignalCellularConnectedNoInternet0BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0Bar';

function getImageToInternetConnection(status: InternetAvailability) {
  switch (status) {
    case InternetAvailability.FullCover:
      return <SignalCellular3BarIcon color="disabled" />;
    case InternetAvailability.UnstableConnection:
      return <SignalCellularConnectedNoInternet1BarIcon color="disabled" />;
    case InternetAvailability.NoConnection:
      return <SignalCellularConnectedNoInternet0BarIcon color="disabled" />;
  }
}

function getImageToPublicTransportation(status: EasyPublicTransportation | undefined) {
  switch (status) {
    case EasyPublicTransportation.ByTrain:
      return <DirectionsTransitIcon color="disabled" />;
    case EasyPublicTransportation.ByBus:
      return <DepartureBoardIcon color="disabled" />;
    case EasyPublicTransportation.PrivateTransfer:
      return <NoTransferIcon color="disabled" />;
  }
  return null;
}

export function ActivityIcons({ activity }: { activity: TActivity }) {
  return (
    <Box sx={{}}>
      {getImageToInternetConnection(activity.internetAvailability)}
      {getImageToPublicTransportation(activity.easyPublicTransportation)}
    </Box>
  );
}
