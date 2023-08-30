import Link from 'next/link';
import Image from 'next/image';

// #FF7597
export default function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={28} height={28} />
        <p className="text-heading2-bold text-light-1 max-xs:hidden">Snitch</p>
      </Link>
    </nav>
  );
}
