"use client"

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs'

export default function UserSection({ user }) {
  return (
    <>
      {user ? (
        <UserButton />
      ) : (
        <Link href="./login">Login</Link>
      )}
    </>
  );
}
