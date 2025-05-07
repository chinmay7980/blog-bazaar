
import Link from 'next/link';
import './page.css'

export default function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
            <Link href="/" className='logo-link'>Blog-Bazaar</Link>
        </div>
        <div className='navbar-components'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
