import Background from "./Background";
import Image from "next/image";


export default function TicketForm(){
  return(
    <div className="relative w-full p-10">
      <Background />
      <div className="relative z-10 flex items-center justify-center flex-col space-y-10">
        <Image
          src="/assets/images/logo-full.svg"
          alt="Logo"
          width={200}
          height={50}
        />
        <div className="text-center space-y-4 ">
          <h1 className="text-4xl font-extrabold">Your Journey to Coding Conf <br/>2025 starts here!</h1>
          <p className="text-sm text-[hsl(245,15%,58%)]">secure your spot at next year's biggest coding conference. </p>
        </div>
        <div className="w-[350px]  justify-start">
          <p className="text-sm text-[hsl(245,15%,58%)] ">Upload your avatar</p>
          <div className="w-full h-25 bg-transparent border border-dashed rounded-md" >

          </div>
        </div>
      </div>
    </div>
  )
}