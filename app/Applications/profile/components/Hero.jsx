// import "@fontsource/work-sans";
import { CgProfile } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative overflow-hidden">


      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1   relative">
        <div className=" flex flex-col lg:gap7 px-2 pb-8 gap-10 lg:m-10 text-[#4C4C4D] font-sans sm:text-[26px] justify-center text-xl ">

          <div className=" font-medium text-5xl font-"> <p>Hi Hamid,</p> </div>
          <div className="">
            <p>Welcome to Og Hub dashboard! </p>
          </div>
          <div>
            <p>
              {" We're thrilled to have you here. Explore your personalized space to view your order history, manage your plans, and discover more about our offerings. If you have any questions or need assistance, feel free to reach out."}
              {" "}
            </p>
          </div>
          <div>
            <p>Happy navigating!</p>
          </div>
        </div>
        <div className="">
          <div className="mb-16 mt-3 flex flex-col gap-8 lg:p-10 md:p-7 py-6 px-4 text-[#4C4C4D] box-shadow relative  bg-white rounded-3xl">

            <div className="flex flex-row gap-6 ">

              <p className="font-medium text-2xl"> Personal Details</p>{" "}
              <CgProfile className="w-[32px] text-gray-400 h-[32px] " />{" "}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-5 gap-2">
              <div className="sm:text-base text-xs grid gap-2 md:col-span-1 col-span-2">
                <p>First name :</p>
                <p>Last name :</p>
                <p>Date of birth :</p>
                <p>Postal address :</p>
                <p>City region :</p>
                <p>Country :</p>
                <p>Phone number :</p>
                <p>Email :</p>
              </div>
              <div className="md:col-span-2 col-span-3  font-semibold sm:text-base text-xs grid gap-2 ">
                <p>Hamid</p>
                <p>HamidHamid</p>
                <p>10/10/1995</p>
                <p>Address</p>
                <p>City</p>
                <p>Country</p>
                <p>9876543210</p>
                <p>email.email.com</p>
              </div>
            </div>
            <div className="underline flex lg:flex-row flex-col lg:gap-11 gap-3 ">
              <div className="flex flex-row text-base font-medium">
                Сhange personal details <MdModeEdit className="h-[100%] ml-3" />{" "}
              </div>
              <div className="flex flex-row text-base font-medium">
                Сhange password <MdModeEdit className="h-[10%] ml-3" />{" "}
              </div>
            </div>
            <div className="flex flex-row  items-center">
              <Image className="w-[20%]" width={0} height={0} layout="responsive" src='/profile/og_logo.png' alt="" />{" "}
              <p className="sm:text-base text-xs font-medium font-Sans">
                Managed by One Global Hub
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
