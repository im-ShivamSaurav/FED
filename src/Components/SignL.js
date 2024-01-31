import Header from "./Header"
import Home from "./Home"
import { Link } from "react-router-dom";

const SignL = () => {
  return (
    <div>
      <div
        className={
          "Sign_in_page relative inset-0 flex items-center justify-center w-[90rem] h-[64rem] z-[10] mx-auto transition-all duration-500  ease-in overflow-hiddentop:0"
        }
      >
        <div className="">
          <div className="absolute backdrop:filter backdrop-blur-3xl z-[11] top-[0rem] left-[0rem] ">
            <Header />
            <Home />
          </div>
          <div className="absolute top-[0rem] left-[0rem] w-[100%] h-[100%] mx-auto z-[11] backdrop-filter filter backdrop-blur-[21px] bg-black bg-opacity-35"></div>
          <div
            className="absolute top-[0rem] left-[0rem] w-[100%] h-[100%] mx-auto flex items-center justify-center overflow-hidden z-[12] transition-all duration-500  ease-in"
            style={{
              background:
                "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="1024"
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
                  height="1110"
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

          <div
            className="absolute top-[6.75rem] left-[24.94rem] bg-[#000000] w-[40.1875rem] h-[51.0625rem] z-[13] rounded-[2.1875rem]"
            style={{
              background:
                "linear-gradient(180deg, #0E100F 23.62%, rgba(14, 16, 15, 0.00) 180.97%)",
            }}
          ></div>

          <div className="content absolute top-[11.87rem] left-[41.44rem] text-center font-poppins text-[2.25rem] font-[600] capitalize text-white z-[14]">
            Hello !
          </div>
          <div className="absolute top-[15.87rem] left-[36.44rem] z-[14] text-center font-poppins text-[2.25rem] font-[600] capitalize text-white">
            Welcome Back
          </div>

          <Link to="/"><div onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
           className="absolute z-[14] top-[8.38rem] left-[60.81rem] w-[2.1825rem] h-[2.1825rem] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
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

          <div className="absolute top-[21.38rem] left-[33.44rem] flex flex-col content-center items-center gap-[1.375rem] z-[14]">
            <input
              type="email"
              placeholder="Enter Username"
              className="w-[23.25rem] h-[3.8125rem] rounded-[0.5rem] bg-white px-[1.22rem]"
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-[23.25rem] h-[3.8125rem] rounded-[0.5rem] bg-white px-[1.22rem]"
            ></input>
          </div>
          <div className="absolute z-[14] top-[30.94rem] left-[47.37rem] text-white font-roboto text-[1.25rem] font-[200] capitalize hover:cursor-pointer">
            Forgot Password ?
          </div>
          <Link to="/form"><div onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}
          className="absolute z-[14] top-[35.19rem] left-[33.44rem] w-[23.0625rem] px-[0rem] py-[1.0625rem] content-center items-center rounded-[0.5rem] bg-white text-black font-roboto text-center text-[1.25rem] font-[900] capitalize leading-[1.22275rem] hover:cursor-pointer">
            Sign In
          </div></Link>
          <div className="absolute z-[14] top-[40.81rem] left-[33.44rem] inline-flex content-center items-center gap-[0.75rem]">
            <div className="w-[6.3125rem] h-[0.0625rem] fill-[#ededed]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="2"
                viewBox="0 0 101 2"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M101 1.5H0V0.5H101V1.5Z"
                  fill="#EDEDED"
                />
              </svg>
            </div>

            <div className="font-inter font-[400] capitalize text-[1.125rem] text-white">
              Or Continue With
            </div>

            <div className="w-[6.3125rem] h-[0.0625rem] fill-[#ededed]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="2"
                viewBox="0 0 101 2"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M101 1.5H0V0.5H101V1.5Z"
                  fill="#EDEDED"
                />
              </svg>
            </div>
          </div>

          <div className="absolute z-[14] top-[44.81rem] left-[33.44rem] inline-flex content-center items-start gap-[3.5rem]">
            <div className="relative w-[5.44rem] h-[3.25rem] rounded-[0.625rem] bg-white content-center items-center hover:cursor-pointer">
              <div className="absolute right-[1.6875rem] top-[0.6875rem] w-[1.875rem] h-[1.875rem]">
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

            <div className="relative w-[5.44rem] h-[3.25rem] rounded-[0.625rem] bg-white content-center items-center hover:cursor-pointer">
              <div className="absolute right-[1.6875rem] top-[0.6875rem] w-[1.875rem] h-[1.875rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_175)">
                    <path
                      d="M30 15C30 6.71578 23.2842 0 15 0C6.71578 0 0 6.71566 0 15C0 22.4869 5.48531 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85937 18.3219 5.85937C19.9631 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.9248 9.84375 17.3438 11 17.3438 12.1863V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.487 30 15Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M20.8389 19.3359L21.5039 15H17.3438V12.1863C17.3438 10.9999 17.9249 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C13.4316 29.9393 14.2152 30.0002 15 30C15.7848 30.0002 16.5684 29.9393 17.3438 29.8178V19.3359H20.8389Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_175">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="relative w-[5.44rem] h-[3.25rem] rounded-[0.625rem] bg-white content-center items-center hover:cursor-pointer">
              <div className="absolute right-[1.6875rem] top-[0.6875rem] w-[1.875rem] h-[1.875rem]">
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

          <div className="absolute z-[14] inline-flex content-center items-start gap-[0.375rem] left-[33.41rem] top-[51.31rem]">
            <div className="text-white capitalize text-[1.25rem] font-[300] font-roboto">
              don’t have an account ?
            </div>
            <div className="text-white capitalize text-[1.25rem] font-[900] font-roboto hover:cursor-pointer">
              create account !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignL;