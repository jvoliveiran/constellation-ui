import { Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';
import Breadcrumb from './breadcrumb';

type HeaderProps = {
  title: string;
  subtitle?: string;
  actions?: () => ReactNode;
}

export default function Header({ title, subtitle, actions }: HeaderProps): ReactNode {
  return (
    <>
      <Breadcrumb />
      <Typography variant="h2" className={`text-dark font-medium`}>{title}</Typography>
      { subtitle && (
        <Typography variant="h4" className="text-dark font-medium pt-2">{subtitle}</Typography>
      )}
      { actions && actions()}
      <Divider className="pt-4"/>
    </>
  )
}