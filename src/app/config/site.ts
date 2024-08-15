import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

export type SiteConfig = typeof siteConfig;

const siteConfig = {
  title: "Constellation UI",
  description: "Boilerplate UI app for Constellation Project",
  sideNavMenu: [
    {
      label: 'Overview',
      href: '/dashboard',
      Icon: HomeIcon
    },
    {
      label: 'Person',
      href: '/dashboard/person',
      Icon: PersonIcon
    },
    {
      label: 'Users',
      href: '/dashboard/users',
      Icon: PersonIcon
    },
    {
      label: 'Permissions',
      href: '/dashboard/permissions',
      Icon: KeyIcon
    },
  ],
  links: {
		constellation: "https://github.com/jvoliveiran/constellation-gateway",
  }
};

export default siteConfig;