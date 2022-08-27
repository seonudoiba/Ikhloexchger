import Image from "next/image";
import logo from "../public/logo.png";

const Brand = () => {
  return (
    <div>

    <div className="flex md:justify-center items-center ">
      <Image
        src={logo}
        alt="Ikloeche"
        width="35px"
        height="30px"
      />
      <span className="text-white font-bold text-2xl">Ikhloexchger</span>
    </div>
    </div>
  );
};

export default Brand;
