import { supabase } from '@/services/supabaseClient'
import React,{useState} from 'react'
function Provider({children}){
   const CreateNewUser=()=>{
       supabase.auth.getUser().then(({data:{user}})=>{
   
        //Check if user already exists 

       //if not then create new user
       })
       
   }
   return (
    <div>{children}</div>
   )
}

export default Provider