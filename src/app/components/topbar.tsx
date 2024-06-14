import { PersonIcon, BellIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="w-full h-20 flex bg-dark text-gray-100 font-semibold space-x-6 px-7 items-center flex-row-reverse gap-5 shadow-2xl">
      <Link href="/login">
        <PersonIcon height={20} width={20} />
      </Link>
      <Link href="/">
        <BellIcon height={20} width={20} />
      </Link>
    </div>
  );
}
