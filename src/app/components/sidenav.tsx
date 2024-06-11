import Link from 'next/link';
import { DashboardIcon, HomeIcon, PersonIcon, GearIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Heading } from '@radix-ui/themes';
import siteConfig from '../config/site';

export default function SideNav() {
  return (
    <div className="flex flex-col min-w-64 h-screen text-gray-100 bg-dark justify-between">
      <div className="flex flex-col">
        <div className='flex flex-row gap-2 items-center p-4'>
          <Link href="/" className="flex flex-row gap-2">
            <DashboardIcon height={20} width={20} className="text-secondary" />
            <Heading as="h1" size="5" className="text-secondary">Constellation UI</Heading>
          </Link>
        </div>
        { siteConfig.sideNavMenu.map(sideMenuItem => {
          const { Icon, href, label } = sideMenuItem;
          return (
            <Link href={href} key={label} className='flex flex-row gap-2 items-center p-4 hover:text-dark hover:bg-secondary hover:font-semibold'>
              <Icon height={20} width={20} />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col">
        <Link href="/" className='flex flex-row gap-2 items-center p-4 hover:text-dark hover:bg-secondary hover:font-semibold'>
          <GearIcon height={20} width={20} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  )
}
