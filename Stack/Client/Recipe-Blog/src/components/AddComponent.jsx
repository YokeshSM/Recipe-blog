import React, { useState } from 'react'
import { CirclePlus } from 'lucide-react';
import { MdCancel } from "react-icons/md";
const AddComponent = () => {
 
    const [visible,setvisible]=useState(false)

  return (
    <>
    
    <div>
         <button className="p-3 rounded-md  bg-blue-700 flex justify-end text-white"  onClick={() => setvisible(true)} >
        < CirclePlus className="p-1 size-8" />
        </button>
    </div>
    {
        visible && (
            <>
            <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center backdrop-blur-sm">
              <div className="p-6 w-full max-w-md bg-white rounded-lg border-black border-2 ">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold">ADD YOUR RECIPE</h1>
                  <MdCancel
                    onClick={() => setvisible(false)}
                    className="text-4xl text-red-500 hover:text-red-700"
                  />
                </div>
                <form
                > 
                <div className='flex justify-center items-center  w-[100%]'> 
                    <input type="text" placeholder='Recipe Name...' className='w-[100%] border-2 placeholder:text-zinc-500 rounded-lg my-2 border-black p-2'/>
                </div>
                <div className='flex justify-center items-center gap-8 w-[100%]'> 
                    <input type="text" placeholder='Preparation Time...' className='w-[100%] border-2  placeholder:text-zinc-500 rounded-lg my-2 border-black p-2'/>
                </div>
                <div className='flex justify-center items-center gap-8 w-[100%] '> 
                    <input type="text" placeholder='Servings...(eg=13)' className='w-[100%] border-2  placeholder:text-zinc-500 rounded-lg my-2 border-black p-2'/>
                </div>
                <div className='flex justify-center items-center gap-8 w-[100%]'> 
                    <input type="text" placeholder='Incredients...(Split the input by commas)' className='w-[100%] border-2  placeholder:text-zinc-500 rounded-lg my-2 border-black p-2'/>
                </div>
                <div className='flex justify-center items-center gap-8 w-[100%]'> 
                    <textarea name="" id="" placeholder="Recipe'S Procedure"  className='w-[100%] border-2  placeholder:text-zinc-500 rounded-lg my-2 border-black p-2  '></textarea>
                </div>
                <button 
                type="submit"
                className="mt-2 flex justify-center items-center w-[100%] bg-green-500 p-2 rounded-lg  text-2xl "
                >ADD</button>
                
              </form>
              </div>
            </div>
            </>
        )
    }
    </>
  )
}

export default AddComponent