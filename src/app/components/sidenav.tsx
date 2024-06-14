"use client"

import Link from 'next/link';
import { DashboardIcon, GearIcon } from '@radix-ui/react-icons'
import { Heading } from '@radix-ui/themes';
import siteConfig from '../config/site';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-w-64 h-screen text-gray-100 bg-dark justify-between shadow-2xl">
      <div className="flex flex-col">
        <div className='flex flex-row gap-2 items-center pt-5 pb-5 pl-4'>
          <Link href="/" className="flex flex-row gap-2">
            <DashboardIcon height={20} width={20} className="text-secondary" />
            <Heading as="h1" size="5" className="text-secondary">Constellation UI</Heading>
          </Link>
        </div>
        { siteConfig.sideNavMenu.map(sideMenuItem => {
          const { Icon, href, label } = sideMenuItem;
          return (
            <Link href={href} key={label} className={clsx(
              'flex flex-row gap-2 items-center p-4 hover:text-dark hover:bg-secondary hover:rounded-md hover:mx-4 font-semibold',
              {
                'text-dark bg-secondary rounded-md mx-4': pathname === href
              }
            )}>
            
              <Icon height={20} width={20} />
              <span className="font">{label}</span>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col">
        <Link href="/" className='flex flex-row gap-2 items-center p-4 hover:text-dark hover:bg-secondary hover:rounded-md hover:mx-4 font-semibold'>
          <GearIcon height={20} width={20} />
          <span className="font-semibold">Settings</span>
        </Link>
      </div>
    </div>
  )
}
