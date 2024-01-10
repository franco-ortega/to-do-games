import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/week'}>This Week</Link>
        </li>
        <li>
          <Link href={'/month'}>This Month</Link>
        </li>
        <li>
          <Link href={'/year'}>This Year</Link>
        </li>
        <li>
          <Link href={'/'}>Home Page</Link>
        </li>
      </ul>
    </nav>
  );
}
