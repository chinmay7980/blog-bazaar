
import Link from 'next/link';
import './page.css'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

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
          {user ? (
            <>
              
              <UserButton />
            </>
          ) : (
            <Link href="./login">Login</Link>
          )}
        </div>

        <div className='search-bar'>
          <input type='text' placeholder='Search...' className='search-input' />
          
        </div>
      </div>
    </nav>
  );
}
