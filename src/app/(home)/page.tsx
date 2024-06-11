import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero */}
      <div className="w-full min-h-[520px] bg-dark">
        <div className="m-5 flex flex-row-reverse text-secondary">
          <Link href="/login">
            <Text as="div" className="font-semibold">Sign Up</Text>
          </Link>
        </div>
        <div className="m-40 h-full">
          <Heading as="h1" size="9" className="text-white">
            Welcome to
          </Heading>
          <Heading as="h1" size="9">
            <span className="text-secondary">Constellation</span>
          </Heading>
        </div>
      </div>
      {/* Tech stack */}
      <div className="w-full min-h-[520px]">
        <div className="m-20 h-full flex flex-col space-y-12">
          <Heading as="h2" size="8" className="text-dark">
            Technology
          </Heading>
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
              <Heading as="h3" size="3" className="text-dark">NextJS</Heading>
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
              <Heading as="h3" size="3" className="text-dark">GraphQL</Heading>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="w-full min-h-[520px] bg-neutral">
        <div className="m-20 h-full">
          <Heading as="h2" size="8" className="text-white">
            Contact
          </Heading>
        </div>
      </div>
    </div>
  );
}
