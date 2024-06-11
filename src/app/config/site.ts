import { GearIcon, HomeIcon, MixerHorizontalIcon, PersonIcon } from '@radix-ui/react-icons';

export type SiteConfig = typeof siteConfig;

const siteConfig = {
  title: "Constellation UI",
  description: "Boilerplate UI app for Constellation Project",
  sideNavMenu: [
    {
      label: 'Home',
      href: '/',
      Icon: HomeIcon
    },
    {
      label: 'Users',
      href: '/',
      Icon: PersonIcon
    },
    {
      label: 'Permissions',
      href: '/',
      Icon: MixerHorizontalIcon
    },
  ],
  links: {
		constellation: "https://github.com/jvoliveiran/constellation-gateway",
  }
};

export default siteConfig;