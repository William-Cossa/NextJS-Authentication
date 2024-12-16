import ListUsers from '@/components/List-Users'
import React from 'react'

function Dashboard() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center p-10'>
        <h1 className='text-3xl font-bold self-start'>Dashboard</h1>
        <ListUsers/>
    </main>
  )
}

export default Dashboard