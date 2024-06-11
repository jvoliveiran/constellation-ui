import SideNav from '@/app/components/sidenav';
import TopBar from '@/app/components/topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row">
        <SideNav />
        <div className="w-full min-h-screen flex flex-col">
          <TopBar />
          <div className="bg-slate-50 m-6 p-4 h-full bg-gray-300">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}