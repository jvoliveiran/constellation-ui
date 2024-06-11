import { Heading } from '@radix-ui/themes';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 bg-dark flex flex-col justify-center">
        <div className="m-20">
          <Heading as="h1" size="9" className="text-white">
            Welcome to
          </Heading>
          <Heading as="h1" size="9">
            <span className="text-secondary">Constellation</span>
          </Heading>
        </div>
      </div>
      <div className="w-1/3 flex flex-row items-center justify-center">
        {children}
      </div>
    </div>
  );
}
