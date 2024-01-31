import FormInput from "./FormInput";
import { useState } from "react";
import GenderDropdown from "./GenderDropdown";
import DepartmentDropdown from "./DepartmentDropdown";
import BranchDropd from "./BranchDropd";
import Footer from "./Footer";

const Form = () => {
  const vector =(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="icon" clipPath="url(#clip0_1_263)">
  <path id="Vector" d="M12 1.99438C6.48 1.99438 2 6.47438 2 11.9944C2 17.5144 6.48 21.9944 12 21.9944C17.52 21.9944 22 17.5144 22 11.9944C22 6.47438 17.52 1.99438 12 1.99438ZM13 16.9944H11V14.9944H13V16.9944ZM13 12.9944H11V6.99438H13V12.9944Z" fill="#EB5757"/>
  </g>
  <defs>
  <clipPath id="clip0_1_263">
  <rect width="24" height="24" fill="white" transform="translate(0 -0.00561523)"/>
  </clipPath>
  </defs>
  </svg>);

  const [value, setValues] = useState({
    name:"",
    mobile:'',
    email:"",
    roll:"",
    gender:"",
    branch:"",
    department:"",
  })

  const input = [
    {
      id:1,
      name: "Name",
      type: "text",
      placeholder: "Type here",
      errorMessage: "Special Characters are not accepted.",
      assitive:"Assistive Text",
      label: "name",
      required: "true",
      pattern:  "^[a-zA-Z\\s]*$",

    },
    {
      id:2,
      name: "Mobile Number",
      type: "text",
      placeholder: "Type here",
      errorMessage: "It should be a valid mobile number.",
      assitive:"Assistive Text",
      label: "mobile",
      required: "true",
      pattern:  "^[0-9]{11}",
      
    },
    {
      id:3,
      name: "Email",
      type: "email",
      placeholder: "Type here",
      errorMessage: "It should be a valid email id.",
      assitive:"Assistive Text",
      label: "email",
      required: "true",
      pattern:  "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      
    },
    {
      id:4,
      name: "Roll Number",
      type: "text",
      placeholder: "Type here",
      errorMessage: "Enter a valid Roll Number.",
      assitive:"Assistive Text",
      label: "roll",
      required: "true",
      pattern:  "^[0-9]{5-10}",
      
    }
  ]

  const handleChange = (e) => {
    setValues(...value,  e.target.value);
  }

  const handleSubmit = (e) => {
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div>
    <div className="relative w-[90rem] h-[64rem]">
      <div
        className="leftbox absolute left-0 w-[45rem] h-[64rem]"
        style={{
          background:
            "linear-gradient(180deg, #0A0808 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
      <div
        className="rightbox absolute right-0 w-[45rem] h-[64rem]"
        style={{
          background:
            "linear-gradient(180deg, #0A0808 0%, rgba(51, 51, 51, 0.00) 100%)",
        }}
      ></div>
      <div className="absolute top-[12.31rem] left-[17.5rem]">
        <p className="text-white font-[poppins] text-[6.25rem] font-[700] leading-normal tracking-[0.125rem]">
          Personal Details
        </p>
      </div>
      <div
        className="absolute top-[21.25rem] left-[4.44rem] h-[42.75rem] w-[81.25rem] rounded-[1.875rem] border-[1px] border-[#ffffff25] backdrop-filter backdrop-blur-(21px)"
        style={{
          background:
            "linear-gradient(61deg, rgba(223, 9, 202, 0.20) 17.91%, rgba(255, 255, 255, 0.00) 99.54%)",
        }}
      ></div>
      <form onSubmit={handleSubmit} >
        <div className="Form1 absolute top-[24.87rem] left-[10.6rem] flex flex-col h-[35.72756rem] w-[26.4rem] justify-between text-[#eee] font-[poppins] text-[1.25rem] font-[600] leading-[1.125rem]">
        
          {input.map((e)=>(
            <FormInput key={e.id} name={e.name} label={e.label} placeholder={e.placeholder} type={e.type} assitive={e.assitive} err={e.errorMessage} pattern={e.pattern} vector={vector} onChange={handleChange}/>
          ))}
          
        </div>

        <div className="form2 absolute top-[25.06rem] right-[22.37rem] flex flex-col gap-[4rem] w-[26.875rem] h-[34.95rem] ">
          <div>
          <p className=" text-[#eee] font-[poppins] text-[1.25rem] font-[600] leading-[1.125rem] mb-[0.5rem]">Gender</p>
          <GenderDropdown />
          </div>
          <div>
          <p className=" text-[#eee] font-[poppins] text-[1.25rem] font-[600] leading-[1.125rem] mb-[0.5rem]">Branch</p>
          <BranchDropd />
          </div>
          <div>
          <p className=" text-[#eee] font-[poppins] text-[1.25rem] font-[600] leading-[1.125rem] mb-[0.5rem]">Department</p>
          <DepartmentDropdown/> 
          </div>
        </div>

        <div className="w-[12.375rem] absolute top-[57.44rem] right-[7.19rem] flex justify-center items-center rounded-[1rem] h-[4.5625rem] py-[0.25rem] px-[1rem] bg-[#F45725]" 
        style={{"boxShadow": "0px 9.965px 9.675px 0px rgba(15, 15, 15, 0.25), 0px 16.539px 16.057px 0px rgba(15, 15, 15, 0.29), 0px 27.247px 26.453px 0px rgba(15, 15, 15, 0.34), 0px 47.62px 46.233px 0px rgba(15, 15, 15, 0.40), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 1px #2F2F37, 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 1px 0.75px 0px rgba(255, 255, 255, 0.07) inset"}}>
          <button className="text-white text-center font-poppins text-[2.1875rem] font-[700] leading-normal tracking-[0.04375rem]">Submit</button>
        </div>
      </form>
    </div>
    
    </div>
  );
};
export default Form;
