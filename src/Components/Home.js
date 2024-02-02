
import { Link } from "react-router-dom"
import Carausal from "./Carausal";

const Home=()=>{

    return(
        <div className="flex h-[64rem] w-[90rem] m-[0] relative">
            <div className="w-[45rem] h-[64rem] m-[0]" style={{"background": "linear-gradient(180deg, #0A0808 0%, rgba(51, 51, 51, 0.00) 100%)"}}>
                <Carausal/>
            </div>
            <div className="w-[45rem] h-[64rem] m-auto flex flex-col justify-center items-center gap-[6.62rem]" style={{"background": "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)"}}>
                <div className="w-[36.25rem] h-[16.875rem] mx-auto text-white font-Poppins text-[8.125rem] font-bold leading-[130.769%]">
                    Let's Connect
                </div>
                <div className="w-[37.25rem] h-[14.0625rem] mx-auto text-white font-Poppins text-[3.125rem] font-bold tracking-[0.0625rem]">
                Illuminating the <span className="text-[#F45725]">ENTREPRENEUR</span> in you.
                </div>

                
            </div>
            <div className="absolute bottom-0  h-[32rem] w-[90.0625rem] z-[-1]" style={{"background": "linear-gradient(0deg, #F45725 -356.87%, rgba(244, 87, 37, 0.00) 75.74%)"}}></div>
            <Link to="/sign"><button onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
            className="z-5 absolute right-[4.31rem] bottom-[4.31rem] w-[12.375rem] h-[4.562rem] py-[0.25rem] px-[1rem] gap-[1rem] rounded-[1rem] bg-[#F45725] text-white text-center font-Poppins text-[2.1875rem] font-bold tracking-[0.04375rem]" style={{"box-shadow": "0px 9.965px 9.675px 0px rgba(15, 15, 15, 0.25), 0px 16.539px 16.057px 0px rgba(15, 15, 15, 0.29), 0px 27.247px 26.453px 0px rgba(15, 15, 15, 0.34), 0px 47.62px 46.233px 0px rgba(15, 15, 15, 0.40), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 1px #2F2F37, 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 1px 0.75px 0px rgba(255, 255, 255, 0.07) inset"}}>
                ENROLL
            </button></Link>
        </div>
    )
}
export default Home;