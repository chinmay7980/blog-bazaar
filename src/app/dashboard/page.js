import { UserButton, useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Dashboard() {
  const user = await currentUser()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Welcome to your Dashboard!</h1>
        <UserButton />
      </div>
      
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
        <h2>User Information:</h2>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
        <p><strong>User ID:</strong> {user.id}</p>
      </div>
    </div>
  )
}
