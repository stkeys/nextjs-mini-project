import Image from "next/image";


const Background = () => {
  return (
    <div>
      <Image 
        src="/assets/images/background-desktop.png"
        alt="Main Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }} 
        priority 
      />
      <Image
        src="/assets/images/pattern-lines.svg"
        alt="Pattern Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }} 
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
    </div>
  )
}

export default Background