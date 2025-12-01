import Button from "../ui/Button";
import Image from "next/image";


const Footer = () => {
    return(
        <footer className="bg-gray-200">
         <div className="flex flex-row lg:gap-12 gap-4 lg:p-10 p-5 lg:justify-around justify-between">
{/* 1 */}
            <div className="">
              <Image
              src = "/assets/images/logo-korean.jpg"
              alt = "logo"
             width={300}
             height={150}
              />
            </div>
{/* 2 */}
            <div className="flex flex-col lg:gap-5 gap-3">
                <h1 className="lg:text-2xl md:text-xl text-[15px]"><b>HEAD OFFICE</b></h1>
                <div>
                <p className="text-[10px] lg:text-xl md:text-[15px]">C-702, Bundang Technopark, 744, Pangyo-ro, Budang-gu, Seongnam-si,</p>
                <p className="text-[10px] lg:text-xl md:text-[15px]">Gyeonggi-do, Republic of Korea, ZipCode: 13510</p>
                </div>
                <div className="flex flex-row lg:gap-5 gap-3 text-[10px] lg:text-xl md:text-[15px]">
                    <p ><b>Phone</b></p>
                    <p>+82-31-708-7575 (HQ) </p>
                </div>
                {/* <p className="text-[10px] lg:text-xl md:text-[15px]"><b>Copyright © 2023 RFcore. All rights reserved.</b></p> */}
            </div>
{/* 3 */}
            <div className="flex flex-col lg:gap-5 gap-3 ">
                <h1 className="lg:text-2xl md:text-xl text-[15px]"><b>SUPPORT</b></h1>
                <div className="flex flex-row lg:gap-7 gap-1 ">
                    <p className="lg:text-xl md:text-[15px] text-[10px]">General inquirles</p>
                    <p className="font-semibold lg:text-[18px] md:text-[15px] text-[10px]">Sales@rfcore</p>
                </div>
               <div className="flex flex-row lg:gap-7 gap-3 ">
                    <p className="lg:text-[18px] md:text-[15px] text-[10px]">General inquirles</p>
                    <p className="font-semibold lg:text-[18px] md:text-[15px] text-[10px]">Sales@rfcore</p>
                </div>
               <Button className="lg:mt-3 mt-2 lg:text-xl md:text-[15px] text-[10px]"> FAST QUOTE ENQUIRY</Button>
            </div>
        </div>
        <div className="pl-10">
             <p className="text-[10px] lg:text-xl md:text-[15px]"><b>Copyright © 2023 RFcore. All rights reserved.</b></p>
        </div>
        
        </footer>
    )
}

export default Footer