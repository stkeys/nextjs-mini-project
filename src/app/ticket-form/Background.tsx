import Image from "next/image";


const Background = () => {
  return (
    <div>
      
      <Image
        src="/assets/images/pattern-lines.svg"
        alt="Pattern Background"
        fill
        className="fixed z-0 "
        priority 
      />
      <Image
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="Pattern Top Background"
        width={300}
        height={200}
        className="absolute top-0 right-0 z-0 object-contain"
        priority 
      />
     
      <Image
        src="/assets/images/pattern-squiggly-line-bottom.svg"
        alt="Pattern Top Background"
        width={600}
        height={400}
        className="fixed bottom-0 z-0 "
        priority 
      />
    </div>
  )
}

export default Background