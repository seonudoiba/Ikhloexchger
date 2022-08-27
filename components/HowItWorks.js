import { IoMdContacts } from "react-icons/io";
import { VscServerProcess } from "react-icons/vsc";
import { FaCcApplePay } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <>
       
      <div className="w-72 how-it-works flex justify-center flex-col">
        <div className=" flex justify-center pt-8">
          <IoMdContacts className="text-green-500 icon-size " />
        </div>
        <div className="font-bold text-xl mb-2 text-center pt-2">Contact</div>
        <p className="text-center ">
          Right from your comfort zone, pick any of the services seamlessly
        </p>
      </div>
      <div className="w-72 how-it-works flex justify-center flex-col">
     
        <div className=" flex justify-center pt-8 ">
          <VscServerProcess className="text-green-500 icon-size " />
        </div>
        <div className="font-bold text-xl mb-2  pt-8 text-center">Process</div>
        <p className="text-center ">
          In the instant, we process all transactions in any and all preferred
          service
        </p>
      </div>
      <div className="w-72 how-it-works flex justify-center flex-col">
        <div className=" flex justify-center pt-8">
          <FaCcApplePay className="text-green-500 icon-size " />
        </div>
        <div className="font-bold text-xl mb-2 text-center pt-8">
          Completion
        </div>
        <p className="text-center ">
          No, it&#39s not magic. We are Ikhloexchger and we make things happen in
         <span>real time</span> .
        </p>
        
      </div>
    </>
  );
};

export default HowItWorks;
