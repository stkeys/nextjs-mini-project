import Image from "next/image";
import Background from "./Background";



export default function TicketForm(){
  return(
    <div className="relative w-full overflow-x-hidden h-screen bg-[url(/assets/images/background-desktop.png)]">
      <Background />
      <div className="relative z-10 flex items-center justify-center flex-col space-y-10 p-10">
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
        <div className="w-[400px]  justify-start">
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
         

         
        </div>
      </div>
    </div>
  )
}