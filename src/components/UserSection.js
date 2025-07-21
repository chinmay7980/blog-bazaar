"use client"

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs'

export default function UserSection({ userData }) {
  return (
    <div className="padding-container">
      {userData ? (
        <UserButton />
      ) : (
        <Link href="./login">Login</Link>
      )}
    </div >
  );
}
