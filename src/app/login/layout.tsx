import { Typography } from '@mui/material';
import { comfortaa } from '../config/font';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 bg-black flex flex-col justify-center">
        <div className="m-20">
          <Typography variant="h1" className="text-white">
            Welcome to
          </Typography>
          <Typography variant="h1" className="text-white">
            <span className={comfortaa.className}>Constellation</span>
          </Typography>
        </div>
      </div>
      <div className="w-1/3 flex flex-row items-center justify-center">
        {children}
      </div>
    </div>
  );
}
