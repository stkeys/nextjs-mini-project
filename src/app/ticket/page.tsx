'use client';
import Background from "../ticket-form/Background";
import Image from "next/image";


export default function TicketReceived(){
  return(
    <div className="relative w-full overflow-x-hidden  bg-double text-white h-screen">
      <Background />
      <div className="relative z-10 flex items-center justify-center flex-col space-y-10 p-2 font-500">
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={150}
          height={50}
        />
        <div className="text-center space-y-4 flex items-center flex-col">
          <h1 className="text-3xl sm:text-5xl font-extrabold ">Congrats, <span className="text-[hsl(7,88%,67%)]">Jonathan Kristof!</span> <br/>Your ticket is ready.</h1>
          <p className="sm:w-[40%] text-sm sm:text-md text-[hsl(252,6%,83%)]">we&apos;ve emailed your ticket to <span className="text-[hsl(7,88%,67%)]">jonatan@gmail.com</span> and will send updates in the run up to the event</p>
        </div>
        <div className=" relative min-w-[100px] overflow-hidden">
          <div className="">
            <Image 
              src="/assets/images/pattern-ticket.svg"
              alt="ticket-frame"
              width={400}
              height={200}
              className=" h-auto"
           />
          </div>
          <div className="m-2 absolute inset-0 ">
            <div className="space-y-6 min-sm:space-y-10">
              <div className="flex gap-4">
                <Image 
                  src="/assets/images/logo-mark.svg"
                  alt="logo-icon"
                  width={30}
                  height={30}
                />
               <div>
                  <p className="text-sm">Coding Conf</p>
                  <p className="text-xs text-[hsl(252,6%,83%)]">Jan 31, 2025 / Austin, TX</p>
               </div>
             </div>
              
             <div className="flex gap-4">
                <div>
                  <Image 
                    src="/assets/images/image-avatar.jpg"
                    alt="image-avatar"
                    width={40}
                    height={20}
                    className="rounded-sm"
                  />
                </div>
                
                <div>
                  <p className="text-sm">Jonatan Kristof</p>
                  <div className="flex gap-2">
                    <Image 
                      src="/assets/images/icon-github.svg"
                      alt="github-icon"
                      width={20}
                      height={20}
                    />
                    <p className="text-xs text-[hsl(252,6%,83%)]">@jonatankristof@f0101</p>
                    
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