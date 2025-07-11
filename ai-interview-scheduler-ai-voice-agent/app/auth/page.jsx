"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
const page = () => {

  //used to sign in with google 
  const signInWithGoogle=async()=>{
    const {error}=await supabase.auth.signInWithOAuth({
      provider:'google'
    })
    if(error){
      console.log('Error,error.message')
    }

  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <div className='flex flex-col items-center border rounded-2xl p-8'>
          <Image src={'/logo1.png'} alt='logo' 
          width={400}
          height={150}
          className='w-[180px]'/>
          <div className='flex items-center flex-col '>
            <Image src={'/logo.jpg'} alt='login'
            width={600}
            height={400}
            className='w-[400px] h-[250px] rounded-2xl'/>
          </div>
          <h2 className='text-2xl font-bold text-center mt-5'>Welcome to AiCruiter</h2>
          <p className='text-gray-500 text-center'>Sign In With Google Authentication</p>
          <Button className='mt-4 w-full'
          onClick={signInWithGoogle}>Login with Google</Button>
       </div>
    </div>
  )
}

export default page
