import { Button } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const ButtnRequest = () => {
    const buttonStyle={
        backgroundColor: '#C4F0AB',
          color: '#153240',
          borderRadius: '18px',
          padding: '8px 15px',
          width:'100%',
          fontWeight:'800',
    }
    // function handleClick() {
    //   const router = useRouter();
    //   router.push('/Home');
    // }
  return (
    <div>
        <Link href="/plans" >
         <Button style={buttonStyle}>Request a Quote</Button>
         </Link>
    </div>
  )
}

export default ButtnRequest