import logo from "../../Resources/9769.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-center fixed z-[5] ml-[4.44rem] mt-[3rem]">
      <nav className="relative flex w-[81.25rem] h-[7.5rem] p-[1.875rem] justify-between items-center rounded-[1.25rem] bg-[rgba(255, 255, 255, 0.00)] text-white">
        <div className="glass absolute inset-0 z-[-1] top-1 left-1">
          {/* Apply backdrop-filter for glass effect */}
          <div
            className="backdrop-filter backdrop-blur-[21px] transform w-[81.25rem] h-[7.5rem] rounded-[1.25rem] border border-[#ffffff50]"
            style={{
              "background":
                "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
        </div>
          <Link to="/" >
        <div className="flex items-center gap-[1.8125rem] hover:cursor-pointer" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-white font-Rubik text-[3rem] font-bold drop-shadow-[1px_0.497px_1px_#F45725] gap-[0.625rem] flex items-start">
            FED
          </h1>
        </div>
        </Link>
        <div className="w-[33.875rem] p-[1rem]">
          <ul className="list-none flex justify-between items-center font-Poppins text-[1.75rem] font-semibold leading-[99.614%] tracking-[0.00875rem]">
            <Link to="/"><li className="hover:cursor-pointer" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Home</li></Link>
            <Link to="/about"><li className="hover:cursor-pointer" onClick={()=>{window.scrollTo({top:1000,behavior:"smooth"})}}>About</li></Link>
            <Link to="/sign"><li className="text-[#F45725] hover:cursor-pointer" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Sign in</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;