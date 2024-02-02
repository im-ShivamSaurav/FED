import { useEffect, useState } from "react";
import logo from "../../Resources/laptop.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carausal = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(()=>{
    const slideInterval = setInterval(handleNextClick,2000);
    return()=>clearInterval(slideInterval);
  })
  const img = [
    {
      index: 0,
      src: logo,
    },
    {
      index: 1,
      src: logo,
    },
    {
      index: 2,
      src: logo,
    },
  ];

  const handlePrevClick = () => {
    if (activeImageIndex === 0) setActiveImageIndex(img[img.lenght - 1].index);
    else setActiveImageIndex(activeImageIndex-1);
  };

  const handleNextClick = () => {
    if (activeImageIndex < img.length - 1)
      setActiveImageIndex(activeImageIndex+1);
    else setActiveImageIndex(0);
  };
  return (
    <div className="w-[45rem] h-[64rem] relative overflow-hidden">
        <div className="transform transition duration-500 ease-out flex" style={{transform:`translateX(-${activeImageIndex*100}%)`}}>      
      {img.map((e)=>(<img className="w-[45rem] h-[64rem]" src={e.src} key={e.index}/>))}
      </div>
      <button
        className="absolute left-[1rem] top-[50%] translate-y-[-50%] text-white/50 hover:text-white text-4xl font-thin"
        onClick={handlePrevClick}
      >
        <FaAngleLeft/>
      </button>
      <button
        className="absolute right-[1rem] top-[50%] translate-y-[-50%] text-white/50 hover:text-white text-4xl font-thin"
        onClick={handleNextClick}
      >
        <FaAngleRight />
      </button>
      <div className="absolute left-[50%] translate-x-[-50%] bottom-2 flex gap-3">
        {img.map((e,i)=>(<div className={"hover:cursor-pointer h-[0.8rem] w-[0.8rem] rounded-full "+(i===activeImageIndex?" bg-[#F45725] hover:[#F45725] scale-125":"bg-white/50 hover:bg-white")} onClick={()=>{setActiveImageIndex(i)}}></div>))}
      </div>
    </div>
  );
};

export default Carausal;
