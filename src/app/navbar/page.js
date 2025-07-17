
import Link from 'next/link';
import './page.css'
import { currentUser } from '@clerk/nextjs/server'
import SearchBar from '../../components/SearchBar'
import UserSection from '../../components/UserSection'

export default async function Navbar() {
  const user = await currentUser()
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
            <Link href="/" className='logo-link'>Blog-Bazaar</Link>
        </div>

        <div className='navbar-components'>
          <Link href="/">Home</Link>
          <Link href="./about">About</Link>
          <Link href="./contact">Contact</Link>
          <UserSection user={user} />
        </div>

        <SearchBar />
      </div>
    </nav>
  );
}
