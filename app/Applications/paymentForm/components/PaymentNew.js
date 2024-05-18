import { globalPostService } from "@/app/utils/apiServices";
import axios from "axios";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";

const PaymentNew = ({ paymentData, referenceId }) => {
    console.log(paymentData, 'paymentData');

    const paymentActionButton = () => {
        let payload = {
            amount: paymentData?.selected?.amount,
            callbackURL: window.location.origin + "/payment-summary",
            currency: "KWD",
            userReference: 0,
            referenceID: parseInt(referenceId),
            sourceCurrency: "conditional",
            billingDetails: {
                name: paymentData?.username,
                email: paymentData?.email,
            },
            pc: "KWKNETDC"
        }
        axios.post('https://api-one-global.code-ox.com/api/payment', payload, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                window.location.href = response.data.data.redirectURL
            })
    }
    return (
        <div className="">
            <div className="text-[#4C4C4D] bg-white box-shadow rounded-3xl p-10">
                <p className='text-4xl font-medium w-40%'>Select Payment Method</p>
                <div className="md:flex">
                    <div className="md:w-1/2 justify-between flex flex-col pt-4 gap-5">
                        <div className="flex flex-col gap-5 mt-4">

                            <div className="">
                                <label className="flex items-center gap-3">
                                    <input type="radio" className="w-6 h-6 border-[#FF8500] checked:bg-[#FF8500] border text-[#4C4C4D] text-[26px]" checked />
                                    <Image width={1000} height={500} alt="" src={"https://travelmate.net/tmintl/images/paymentmode/KNET.jpg"} className="w-[60px] h-[50px]"></Image>
                                    Pay pal
                                </label>
                            </div>
                        </div>
                        <div className="py-6 pt-10">
                            <button className='border-2 border-[#FF8500] rounded-[45px] px-16 py-2 md:text-[30px] text-[20px]' onClick={paymentActionButton}>Pay Now</button>
                        </div>
                    </div>



                    <div className='md:w-1/2 flex flex-col gap-10'>
                        <div className='flex md:gap-24 gap-6 '>
                            <div>
                                <p className='md:text-2xl text-xl font-medium'>Payment Summary</p>
                                <p className='text-lg'>Package Name</p>
                                <p className='text-lg'>Program</p>
                                <p className='text-lg'>Name</p>
                                <p className='text-lg'>Email</p>
                                <p className='text-lg'>Payment Method:</p>
                                <p className='text-lg'>Payment Status:</p>
                                <p className='text-lg'>Payment Reference:</p>
                                <p className='text-lg font-semibold'>Total</p>
                            </div>
                            <div className=" md:pt-0">
                                <CiCreditCard1 className="w-[32px] text-gray-400 h-[32px] " />{" "}
                                <p className='text-lg capitalize'>{paymentData?.selected?.package_name}</p>
                                <p className='text-lg capitalize'>{paymentData?.selected?.program_name}</p>
                                <p className='text-lg capitalize'>{paymentData?.username ? paymentData?.username : ''}</p>
                                <p className='text-lg capitalize' >{paymentData?.email}</p>
                                <p className='text-lg capitalize'>KNET</p>
                                <p className='text-lg capitalize'>{paymentData?.status}</p>
                                <p className='text-lg'>{referenceId}</p>
                                <p className='text-lg font-semibold capitalize'>KWD {paymentData?.selected?.amount}</p>
                            </div>
                        </div>
                        <div className=' flex gap-6 justify-end  '>
                            <div>
                                <Image width={200} height={200} className="object-contain" alt="" src="/og_logo.png" ></Image></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PaymentNew;
