import img from "../../Resources/home.png";
import { Link } from "react-router-dom";

const SignMd = () => {
  return (
    <div>
      <div className="relative top-0">
        <div
          className="absolute w-full h-[100vh] mx-auto flex items-center justify-center overflow-hidden  ease-in z-[5]"
          style={{
            background:
              "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            max-height="1024"
            viewBox="0 0 1440 1024"
            fill="none"
          >
            <g filter="url(#filter0_b_1_143)">
              <path
                d="M0 0L1440 0V1024H0L0 0Z"
                fill="url(#paint0_linear_1_143)"
                fill-opacity="0.25"
              />
              <path
                d="M0 -0.5H-0.5L-0.5 0L-0.5 1024V1024.5H0H1440H1440.5V1024V0V-0.5L1440 -0.5L0 -0.5Z"
                stroke="url(#paint1_radial_1_143)"
              />
              <path
                d="M0 -0.5H-0.5L-0.5 0L-0.5 1024V1024.5H0H1440H1440.5V1024V0V-0.5L1440 -0.5L0 -0.5Z"
                stroke="url(#paint2_radial_1_143)"
              />
              <path
                d="M0 -0.5H-0.5L-0.5 0L-0.5 1024V1024.5H0H1440H1440.5V1024V0V-0.5L1440 -0.5L0 -0.5Z"
                stroke="url(#paint3_radial_1_143)"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1_143"
                x="-43"
                y="-43"
                width="1526"
                max-height="1110"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="21" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_143"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1_143"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_143"
                x1="-6.99954"
                y1="21.9992"
                x2="488.806"
                y2="1388.56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-opacity="0.4" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_1_143"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(713 534) rotate(-142.266) scale(1161.68 875.472)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1_143"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(713.001 534) rotate(31.434) scale(1012.61 654.758)"
              >
                <stop stop-color="#0938DF" />
                <stop offset="1" stop-color="#F45725" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1_143"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(712.999 534) rotate(145.482) scale(957.734 668.38)"
              >
                <stop stop-color="#151515" />
                <stop offset="1" stop-color="#151515" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div>
          <img
            src={img}
            className="absolute top-0 left-0 w-full h-[100vw] mx-auto overflow-hidden ease-in z-[2]"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-[100vh] mx-auto overflow-hidden bg-black bg-opacity-50 ease-in z-[3]"></div>

        <div
          className="relative h-[450px] w-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[30%] bg-black z-[6] rounded-[1.25rem]"
          style={{
            background:
              "linear-gradient(180deg, #0E100F 23.62%, rgba(14, 16, 15, 0.00) 180.97%)",
          }}
        >
          <div className="absolute text-white font-poppins text-center text-[22px] top-[20px] left-[50%] translate-x-[-30%]">
            Hello !
          </div>
          <Link to="/"><div onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
          className="absolute top-[20px] right-[20px] h-[27px] w-[27px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              max-width="45"
              max-height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M31.6406 13.3594L13.3594 31.6406M13.3594 13.3594L31.6406 31.6406"
                stroke="#F8F8F8"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div></Link>
          <div className="absolute text-white font-poppins text-center text-[20px] top-[63px] left-[50%] translate-x-[-50%] Capitalize">
            Welcome Back
          </div>
          <div className="absolute top-[130px] left-[50%] translate-x-[-50%] flex flex-col content-center items-center gap-[0.65rem] ">
            <input
              type="email"
              placeholder="Enter Username"
              className="w-[260px] h-[40px] rounded-[0.5rem] bg-white px-[0.7rem]"
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-[260px] h-[40px] rounded-[0.5rem] bg-white px-[0.7rem]"
            ></input>
          </div>

          <div className="absolute top-[222px] right-[10%] text-white font-roboto text-[12.5px] font-[300] ">
            Forgot Password ?
          </div>
          <Link to="/form"><div onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
          className="absolute top-[260px] w-[260px] h-[40px] flex justify-center items-center left-[50%] translate-x-[-50%] bg-white text-black font-roboto font-[900] text-[12px] py-[0.53rem] rounded-[0.5rem]">
            Sign In
          </div></Link>

          <div className="absolute top-[320px] w-[260px] left-[50%] transform translate-x-[-50%] inline-flex items-center gap-[5px] justify-center">
            <div className="w-[70px] h-[0.4px] bg-[#ededed] mr-1"></div>
            <div className="font-inter font-normal capitalize text-[9px] text-white mx-1">
              Or Continue With
            </div>
            <div className="w-[70px] h-[0.4px] bg-[#ededed] ml-1"></div>
          </div>

          <div className="w-[260px] mx-auto">
            <div className="absolute top-[350px] w-[260px] flex items-center gap-[15px] justify-around">
              <div className="relative w-[50px] h-[34px] rounded-[0.625rem] flex justify-center items-center bg-white  hover:cursor-pointer">
                <div className="absolute w-[1.875rem] h-[1.875rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.94141 9.18188L8.04828 12.1938C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18188Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M15.0002 27.5C18.2289 27.5 21.1627 26.2644 23.3808 24.255L19.5121 20.9813C18.2149 21.9677 16.6299 22.5013 15.0002 22.5C11.7489 22.5 8.98832 20.4269 7.94832 17.5338L3.87207 20.6744C5.94082 24.7225 10.1421 27.5 15.0002 27.5Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-[50px] h-[34px] rounded-[0.625rem] bg-white flex justify-center items-center hover:cursor-pointer">
                <div className="absolute  w-[1.875rem] h-[1.875rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71566 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85937 18.3219 5.85937C19.9631 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9248 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z"
                      fill="white"
                    />

                    <defs>
                      <clipPath id="clip0_1_175">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="relative w-[50px] h-[34px] rounded-[0.625rem] bg-white flex justify-center items-center hover:cursor-pointer">
                <div className="absolute w-[1.875rem] h-[1.875rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M20.457 8.01917C18.0945 8.01917 17.096 9.14651 15.4507 9.14651C13.7638 9.14651 12.4771 8.02737 10.4298 8.02737C8.42591 8.02737 6.289 9.25081 4.93197 11.335C3.0265 14.274 3.34994 19.8094 6.43607 24.525C7.53997 26.2131 9.01419 28.1063 10.9478 28.1268H10.9829C12.6634 28.1268 13.1626 27.0264 15.4753 27.0135H15.5105C17.7886 27.0135 18.2456 28.1203 19.9191 28.1203H19.9542C21.8878 28.0998 23.4411 26.0022 24.5451 24.3205C25.3396 23.1112 25.6349 22.5041 26.2443 21.136C21.78 19.4414 21.0628 13.1127 25.4779 10.6864C24.1302 8.99885 22.2365 8.02151 20.4511 8.02151L20.457 8.01917Z"
                      fill="black"
                    />
                    <path
                      d="M19.9367 1.875C18.5305 1.97051 16.8898 2.86582 15.9289 4.03477C15.057 5.09414 14.3398 6.66563 14.6211 8.18965H14.7336C16.2313 8.18965 17.7641 7.28789 18.6594 6.13242C19.5219 5.03262 20.1758 3.47402 19.9367 1.875Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] ms-auto">
            <div className="absolute z-[14] flex justify-center content-center items-center top-[400px]">
              <div className="text-white capitalize text-[12px] font-[300] font-roboto mr-[4px]">
                don't have an account ?
              </div>
              <div className="text-white capitalize text-[12px] font-[900] font-roboto hover:cursor-pointer">
                create account !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignMd;