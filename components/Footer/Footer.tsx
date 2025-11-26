import Button from "../ui/Button";
import Image from "next/image";


const Footer = () => {
    return(
        <section className="flex flex-row gap-6 m-3 ">
{/* 1 */}
            <div className="">
              
            </div>
{/* 2 */}
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl"><b>HEAD OFFICE</b></h1>
                <div>
                <p>C-702, Bundang Technopark, 744, Pangyo-ro, Budang-gu, Seongnam-si,</p>
                <p>Gyeonggi-do, Republic of Korea, ZipCode: 13510</p>
                </div>
                <div className="flex flex-row gap-5">
                    <p><b>Phone</b></p>
                    <p>+82-31-708-7575 (HQ) </p>
                </div>
                <p><b>Copyright © 2023 RFcore. All rights reserved.</b></p>
            </div>
{/* 3 */}
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl"><b>SUPPORT</b></h1>
                <div className="flex flex-row gap-7">
                    <p>General inquirles</p>
                    <p>Sales@rfcore</p>
                </div>
                <div className="flex flex-row gap-7">
                    <p>General inquirles</p>
                    <p>Sales@rfcore</p>
                </div>
               <Button > FAST QUOTE ENQUIRY</Button>
            </div>
        </section>
    )
}

export default Footer