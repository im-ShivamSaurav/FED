import mascot from "../../Resources/9769.png"
import logo from "../../Resources/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" relative w-[90rem] h-[36rem] bg-[#0E100F]">
      <div
        className="absolute top-0 w-[90rem] h-[36rem] z-[-1] "
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
      <div
        className="absolute w-[17.5rem] h-[17.5rem] rounded-[17.5rem] top-0 right-0"
        style={{
          background:
            "linear-gradient(to bottom right, #E7CE4A 0%, #E64467 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #E7CE4A 0%, #E64467 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #E7CE4A 0%, #E64467 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #E7CE4A 0%, #E64467 50%) top right / 50% 50% no-repeat",
        }}
      ></div>
      <div className="absolute bottom-0 h-[29.25rem] w-[90rem] rounded-t-[1.25rem] backdrop-filter backdrop-blur-[21px] border-[1px] border-[#ffffff50]" 
      style={{"background": "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)"
}}> 
      </div>
      <Link to="/"><div onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
      className="absolute top-[11.38rem] flex w-[12.1rem] h-[4.482rem] gap-[1.25rem] items-center left-[38.94rem] hover:cursor-pointer">
            <img className="h-[3.75rem] w-[3.75rem]" src={mascot}/>
            <img  className="h-[3.56rem] w-[5.94rem]" src={logo}/>
        </div></Link>
        <div className="absolute h-[2.24rem] w-[26rem] top-[17.71rem] left-[33.1rem]" >
            <ul className="flex text-white justify-between font-[poppins] text-[1.25rem] font-[500] leading-[150%] ">
                <Link to="/" ><li className="hover:cursor-pointer hover:scale-125 hover:text-[#F45725]" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Home</li></Link>
                <Link to="/about"><li className="hover:cursor-pointer hover:scale-125 hover:text-[#F45725]" onClick={()=>{window.scrollTo({top:1000,behavior:"smooth"})}}>About</li></Link>
                <Link to="/"><li className="hover:cursor-pointer hover:scale-125 hover:text-[#F45725]" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Service</li></Link>
                <Link to="/"><li className="hover:cursor-pointer hover:scale-125 hover:text-[#F45725]" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Contact Us</li></Link>
            </ul>
        </div>
        <div className="absolute h-[3rem] w-[13.6rem] top-[22.49rem] left-[38.15rem] flex text-white justify-between items-center font-[poppins] text-[1.25rem] font-[500] leading-[150%] " >            
        <Link to="https://www.linkedin.com/in/shivam-saurav/" target="_blank"><i className="fa-brands fa-linkedin-in h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:cursor-pointer hover:bg-[transparent] hover:text-[#F45725] hover:scale-125"></i></Link>
        <Link to="https://github.com/im-ShivamSaurav" target="_blank"><i className="fa-brands fa-github h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:cursor-pointer hover:bg-[transparent] hover:text-[#F45725] hover:scale-125"></i></Link>
        <Link to="https://twitter.com/im_ShivamSaurav" target="_blank"><i className="fa-brands fa-instagram h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:cursor-pointer hover:bg-[transparent] hover:text-[#F45725] hover:scale-125"></i></Link>
        <Link to="https://instagram.com/im.shivam_17" target="_blank"><i className="fa-brands fa-x-twitter h-[2.62381rem] w-[2.62381rem] bg-[#F45725] text-white rounded-[2.62381rem] p-[0.75rem] hover:cursor-pointer hover:bg-[transparent] hover:text-[#F45725] hover:scale-125"></i></Link>
        </div>
        <div className="absolute w-[80.8125rem] h-[0] border-b-[0.125rem] border-[#F45725] top-[28.47rem] left-[4.56rem]">
        </div>
        <div className="absolute top-[31.44rem] left-[38.19rem]">
            <p className="text-[#CFD3D7] text-center font-Roboto text-[1.25rem] font-[400] leading-[150%]">Copyright @ShivamSaurav</p>
        </div>
    </div>
  );
};

export default Footer;
