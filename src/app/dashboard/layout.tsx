import SideNav from '@/app/components/sidenav';
import TopBar from '@/app/components/topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row bg-white">
        <SideNav />
        <div className="w-full min-h-screen flex flex-col">
          <TopBar />
          <div className="m-8 p-4 h-full shadow-lg rounded-md bg-white">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}