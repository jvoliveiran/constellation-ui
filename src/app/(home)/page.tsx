import Image from "next/image";
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { comfortaa } from '../config/font';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero */}
      <div className="w-full min-h-screen bg-black"> 
        <div className="m-5 flex flex-row-reverse text-secondary">
          <Link href="/login">
            <Typography variant="body1" component="h5" className="text-white font-semibold">Sign Up</Typography>
          </Link>
        </div>
        <div className="m-40 h-full">
          <Typography variant="h1" className="text-white"><span className={comfortaa.className}>/constellation</span></Typography>
          <Typography variant="h5" className="text-white pt-6 font-normal">Sua plataforma para criação de SaaS</Typography>
        </div>
        <div className="flex justify-center mt-40 h-full w-full space-x-8 text-white">
          <Button variant="contained" color="secondary" className="font-semibold">Demonstração</Button>
          <Link href="/login">
            <Button variant="contained" color="secondary" className="font-semibold">Criar conta</Button>
          </Link>
        </div>
        <div className="flex justify-center mt-40">
          <Link href="#tech-stack">
          <Button variant="contained" color="violet" className="h-10 font-semibold">Saiba mais</Button>
          </Link>
        </div>
      </div>
      {/* Tech stack */}
      <div className="w-full min-h-[520px]">
        <div className="m-20 h-full flex flex-col space-y-12">
          <Typography id="tech-stack" variant="h4" className="text-dark">
            Tech Stack
          </Typography>
          <div className="flex flex-row space-x-10 pt-12 justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <div className="h-[60px] w-[60px] flex items-center">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <Typography variant="body1" className="text-dark">NextJS</Typography>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <div className="h-[60px] w-[60px]">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/graphql.svg"
                  alt="GraphQL Logo"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <Typography variant="body1" className="text-dark">GraphQL</Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="w-full min-h-[520px] bg-black">
        <div className="m-20 h-full">
          <Typography variant="h4" className="text-white">
            Contact
          </Typography>
        </div>
      </div>
    </div>
  );
}
