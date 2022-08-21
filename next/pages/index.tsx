import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <Link href="/new/1" passHref>
        <a style={{ marginRight: '4px' }}>NEW Page</a>
      </Link>
      <Link href="/old/1" passHref>
        <a style={{ marginRight: '4px' }}>OLD Page</a>
      </Link>
    </div>
  )
}

export default Index
