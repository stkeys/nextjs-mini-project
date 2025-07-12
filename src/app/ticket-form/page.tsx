'use client';

import Image from "next/image";
import Background from "./Background";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginAction } from "../../../actions/login.action";
import { PasswordInput } from "@/components/password-input";




export default function TicketForm(){

  return(
    <div className="relative w-full overflow-x-hidden  bg-double text-white">
      <Background />
      <div className="relative z-10 flex items-center justify-center flex-col space-y-10 p-10 font-500">
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={150}
          height={50}
          className=""
        />
        <div className="text-center space-y-4 ">
          <h1 className=" text-3xl sm:text-6xl font-extrabold ">Your Journey to Coding Conf <br/>2025 starts here!</h1>
          <p className="text-sm sm:text-2xl text-[hsl(252,6%,83%)]">secure your spot at next year's biggest coding conference. </p>
        </div>
        <div className="w-[300px] sm:w-[400px]  justify-start space-y-2">
          <p className=" text-[hsl(252,6%,83%)] ">Upload your avatar</p>
          <div className="w-full h-25 bg-transparent border border-dashed rounded-md flex items-center justify-center flex-col p-4" id="image-view" >
            <Label id="input-file">
              <Input type="file" id="input-file" hidden/>
              <div className="bg-[hsl(245,19%,35%)] rounded-md p-1 text-center">
                <Image
                  src="/assets/images/icon-upload.svg"
                  alt="Icon Upload"
                  width={30}
                  height={30}
                />
              </div>
              <p>Drag and drop or click to upload</p>
              
            </Label>
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
         
         <Card className="border-0 ">
            <form action={loginAction} className="space-y-4 ">
              <div className="space-y-2">
               <Label htmlFor="name">Full Name</Label>
               <Input type="text" id="name" name="name"/>
              </div>
              <div className="space-y-2">
               <Label htmlFor="email">Email Address</Label>
               <Input type="email" id="email" name="email"/>
              </div>
              <div className="space-y-2">
               <Label htmlFor="github">Github Username</Label>
               <Input type="text" id="github" name="github"/>
              </div>
              <div className="space-y-2">
               <Label htmlFor="name">Password</Label>
               <PasswordInput id="password" name="password" />
              </div>
              <Button type="submit" className="bg-[hsl(7,71%,60%)] w-full text-[#000000] mb-20" 
           
                >
                Generate My Ticket
              </Button>
           </form>
         </Card>
         
         
        </div>
      </div>
    </div>
  )
}