import Image from 'next/image';
import Link from 'next/link';
import icon from '../../../public/jackies-kitty-care-icon.svg';
import styles from './NavBar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <Image src={icon} width={88} alt="" priority />
        <span>Jackie&apos;s Kitty Care</span>
      </Link>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
