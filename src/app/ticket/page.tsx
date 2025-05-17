'use client';
import Background from "../ticket-form/Background";
import Image from "next/image";
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'], 
  variable: '--font-inconsolata', 

})

export default function TicketReceived(){
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
        <div className="text-center space-y-4 flex items-center flex-col">
          <h1 className="text-6xl font-extrabold ">Congrats, Jonathan Kristof! <br/>Your ticket is ready.</h1>
          <p className="w-[40%] text-[hsl(252,6%,83%)]">we've emailed your ticket to <span className="text-[hsl(7,88%,67%)]">jonatan@gmail.com</span> and will send updates in the run up to the event</p>
        </div>
        <div className="m-10 relative">
          <Image 
            src="/assets/images/pattern-ticket.svg"
            alt="ticket-frame"
           width={400}
           height={200}
         />
          <div className="absolute top-0 m-4 ">
            <div className="space-y-10">
              <div className="flex gap-4">
                <Image 
                  src="/assets/images/logo-mark.svg"
                  alt="logo-icon"
                  width={30}
                  height={30}
                />
               <div>
                  <p className="text-2xl">Coding Conf</p>
                  <p className="text-sm text-[hsl(252,6%,83%)]">Jan 31, 2025 / Austin, TX</p>
               </div>
             </div>
              
             <div className="flex gap-4">
                <div>
                  <Image 
                    src="/assets/images/image-avatar.jpg"
                    alt="image-avatar"
                    width={50}
                    height={20}
                    className="rounded-sm"
                  />
                </div>
                
                <div>
                  <p className="text-xl">Jonatan Kristof</p>
                  <div className="flex gap-2">
                    <Image 
                      src="/assets/images/icon-github.svg"
                      alt="github-icon"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm text-[hsl(252,6%,83%)]">@jonatankristof@f0101</p>
                    
                  </div>
                 
                </div>
             </div>
            </div>

          </div>
         
        </div>
        

      </div>
    </div>   
  )
}