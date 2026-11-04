import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import SignalWifiOffIcon from '@mui/icons-material/SignalWifiOff';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import { Box } from '@mui/material';
import { EasyPublicTransportation, InternetAvailability } from '../const.ts';
import type { TActivity } from '../types.ts';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import NoTransferIcon from '@mui/icons-material/NoTransfer';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';

function getImageToInternetConnection(status: InternetAvailability) {
  switch (status) {
    case InternetAvailability.NoConnection:
      return <SignalWifiOffIcon color="disabled" />;
    case InternetAvailability.FullCover:
      return <SignalWifi4BarIcon color="disabled" />;
    case InternetAvailability.UnstableConnection:
      return <SignalWifiStatusbarConnectedNoInternet4Icon color="disabled" />;
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
