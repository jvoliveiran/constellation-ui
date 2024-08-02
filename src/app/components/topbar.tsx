import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="w-full h-20 flex bg-black text-gray-100 font-semibold space-x-6 px-7 items-center flex-row-reverse gap-5 shadow-2xl">
      <Link href="/login">
        <PersonIcon height={20} width={20} />
      </Link>
      <Link href="/">
        <NotificationsIcon height={20} width={20} />
      </Link>
    </div>
  );
}
