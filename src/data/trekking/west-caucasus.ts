import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../lib/constants.ts';
import { type TDay, type TTrekking } from '../../lib/types.ts';

const days: TDay[] = [
  {
    distance: 12.24,
    ascent: 115,
    descent: 36,
    minElevation: 284,
    maxElevation: 393,
    externalLink: 'https://connect.garmin.com/app/activity/17500613387',
    trackLink: '/trekking/west-caucasus/day-1.gpx'
  },
  {
    distance: 12.75,
    ascent: 584,
    descent: 141,
    minElevation: 405,
    maxElevation: 960,
    externalLink: 'https://connect.garmin.com/app/activity/17500613909',
    trackLink: '/trekking/west-caucasus/day-2.gpx'
  },
  {
    distance: 7.77,
    ascent: 776,
    descent: 172,
    minElevation: 898,
    maxElevation: 1679,
    externalLink: 'https://connect.garmin.com/app/activity/17500614232',
    trackLink: '/trekking/west-caucasus/day-3.gpx'
  },
  {
    distance: 18.67,
    ascent: 191,
    descent: 1175,
    minElevation: 615,
    maxElevation: 1687,
    externalLink: 'https://connect.garmin.com/app/activity/17500623672',
    trackLink: '/trekking/west-caucasus/day-4.gpx'
  },
  {
    distance: 17.16,
    ascent: 108,
    descent: 397,
    minElevation: 314,
    maxElevation: 641,
    externalLink: 'https://connect.garmin.com/app/activity/17500614917',
    trackLink: '/trekking/west-caucasus/day-5.gpx'
  }
];

export const westCaucasus: TTrekking = {
  slug: 'west-caucasus',
  name: 'West Caucasus',
  distance: 35.63,
  ascent: 1507,
  description:
    "The original plan was to go through Shessi, the Semashko Pass, descend radially from Bolshoy Pseushko and reach the sea in Nizhny Makops. Due to the weather conditions, we couldn't get out, there was too much snow at 1500m, and we didn't have snowshoes, so the group's route was too slow. When we reached the cabin, we decided to turn around and walk back along the trodden path.\n",
  region: 'Russia',
  country: Country.Russia,
  district: 'Krasnodar Krai',
  mountainSystem: 'Caucasus',
  image: '/trekking/west-caucasus/west-caucasus.jpeg',
  days,
  externalLink:
    'https://www.wikiloc.com/hiking-trails/through-mountains-to-sea-failed-western-caucasus-november-2024-3-days-251925660',
  date: '2024-11-01',
  highMountains: true,
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.PrivateTransfer,
  wildCamping: WildCamp.WildCampAllowed,
  temperature: [-5, 10],
  withTent: true
};
