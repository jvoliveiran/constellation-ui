"use client"

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';
import Link from 'next/link';

type BreadcrumbPath = {
  title: string;
  href: string;
}

export default function Breadcrumb(): ReactNode {
  const path = usePathname();

  if (!path) return <></>

  let partialPath = ''
  const breadCrumbPaths: BreadcrumbPath[] = path
    .split('/')
    .filter(element => element !== '')
    .map((p) => {
      partialPath += `/${p}`;
      return {
        title: p,
        href: partialPath
      };
  });

  return (
    <Typography variant="h6" className="text-gray-500 font-medium">
      {breadCrumbPaths && breadCrumbPaths.map((path, index) => {
        const { title, href } = path;
        return (
          <>
            /<Link key={index} href={href}>{title}</Link>
          </>
        )
      })}
    </Typography>
  )
}