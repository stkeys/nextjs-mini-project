'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Background from "./Background";
import { Inconsolata } from 'next/font/google';


const inconsolata = Inconsolata({
  subsets: ['latin'], 
  variable: '--font-inconsolata', 

})


export default function TicketForm(){
  const router = useRouter();
  
  return(
    <div className="relative w-full overflow-x-hidden  bg-double text-white">
      <Background />
      <div className={`relative z-10 flex items-center justify-center flex-col space-y-10 p-10 font-500 ${inconsolata.className}`}>
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={200}
          height={50}
        />
        <div className="text-center space-y-4 ">
          <h1 className="text-6xl font-extrabold ">Your Journey to Coding Conf <br/>2025 starts here!</h1>
          <p className="text-2xl text-[hsl(252,6%,83%)]">secure your spot at next year's biggest coding conference. </p>
        </div>
        <div className="w-[400px]  justify-start space-y-2">
          <p className=" text-[hsl(252,6%,83%)] ">Upload your avatar</p>
          <div className="w-full h-25 bg-transparent border border-dashed rounded-md flex items-center flex-col p-4" >
            <div className="bg-[hsl(245,19%,35%)] rounded-md p-1 flex  justify-center">
              <Image
                src="/assets/images/icon-upload.svg"
                alt="Icon Upload"
                width={30}
                height={30} />
            </div>
            <p>Drag and drop or click to upload</p>
          </div>
          <div className="flex gap-4">
            <Image
              src="/assets/images/icon-info.svg"
              alt="Icon Info"
              width={20} 
             height={20} 
           />
           <p className="text-sm">Upload your photos (JPG or PNG. maxsize: 500px )</p>
         </div>
         <form 
            className="space-y-4"
            >
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              className="w-full border border-[hsl(245,19%,35%)] rounded-md p-2"
            />

            <label htmlFor="emailAddress">Email Address</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              className="w-full border border-[hsl(245,19%,35%)] rounded-md p-2"
            />

            <label htmlFor="githubUsername">GitHub Username</label>
            <input 
              type="email" 
              placeholder="@yourusername"
              className="w-full border border-[hsl(245,19%,35%)] rounded-md p-2"
            />

            <button 
              className="w-full bg-[hsl(7,71%,60%)] rounded-md text-black" onClick={() => router.push("/ticket")}>
              Generate My Ticket
            </button>
          </form>

         
        </div>
      </div>
    </div>
  )
}