"use client"

import Link from 'next/link';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import siteConfig from '../config/site';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';
import { comfortaa } from '../config/font';

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-w-64 h-screen text-gray-100 bg-black justify-between shadow-sm sticky top-0">
      <div className="flex flex-col">
        <div className='flex flex-row gap-2 items-center pt-5 pb-5 pl-4'>
          <Link href="/" className="flex flex-row gap-2">
            <SpaceDashboardIcon sx={{ fontSize: 30 }} className="text-white" />
            <Typography variant="h5" component="h5"><span className={comfortaa.className}>Constellation</span></Typography>
          </Link>
        </div>
        { siteConfig.sideNavMenu.map(sideMenuItem => {
          const { Icon, href, label } = sideMenuItem;
          return (
            <Link href={href} key={label} className={clsx(
              'flex flex-row gap-2 items-center p-4 mx-4 space-x-2 font-semibold hover:bg-white hover:text-black hover:rounded-md',
              {
                'text-white bg-primary rounded-md': pathname === href
              }
            )}>
              <Icon height={20} width={20} />
              <span className="font">{label}</span>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col">
        <Link href="/" className='flex flex-row gap-2 items-center p-4 mx-4 font-semibold hover:bg-white hover:text-black hover:rounded-md'>
          <SettingsIcon height={20} width={20} />
          <span className="font-semibold">Settings</span>
        </Link>
      </div>
    </div>
  )
}
