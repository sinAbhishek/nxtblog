import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div>
    <Link href={"/create"} >
        Create
    </Link>
    </div>
  )
}

export default navbar