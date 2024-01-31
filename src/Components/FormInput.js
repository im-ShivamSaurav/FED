import React from 'react'

const FormInput = (props) => {
  return (
    <div className="flex flex-col w-[26.4rem] h-[7.23rem]">
          <label htmlFor={props.label}>{props.name}</label>
          <div className="...peer my-[0.57rem] flex w-[26.4rem] p-[1rem] justify-between items-center gap-[0.625rem] rounded-[0.5rem] border-[2px] border-[#F45725] bg-white">
            <input required  pattern={props.pattern} name={props.label} type={props.type} className="w-[19rem] text-[#333333] font-[noto sans] text-[1rem] leading-[1.5rem] font-[400] placeholder:text-[#666666] placeholder:font-[noto sans] place-holder:text-[1rem] placeholder:leading-[1.5rem] placeholder:font-[400] outline-none" placeholder={props.placeholder}></input>
            <div className="w-[1.25rem] h-[1.25rem] bg-white hidden peer-[invalid: block]:">{props.vector}</div>
          </div>
            <span className="text-[#eee] font-[Noto Sans] text-[0.75rem] font-[400] leading-[1.125rem] peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">{props.err}</span>
        </div>
  )
}

export default FormInput
