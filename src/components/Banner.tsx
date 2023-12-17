import { ArrowDownOutlined } from "@ant-design/icons";
import BigDino from "../assets/icon/BigDino";

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-10 mt-14 flex-col z-0 bg-black rounded-3xl md:flex-row gap-4">
      <div className="text-white flex-1 md:order-1 order-2">
        <h1 className="text-6xl font-semibold">
          Shop the Look: dinomerch - Define Your Style!
        </h1>
        <h2 className="my-10 text-3xl">
          Elevate Your Wardrobe with <br /> Exclusive merch
        </h2>
        <button className="bg-orange-600 w-[200px] h-[50px] rounded-md flex items-center justify-center gap-2">
          <a href="#products">Scroll down for more</a>
          <ArrowDownOutlined />
        </button>
      </div>
      <div className="order-1 md:order-2">
        <BigDino></BigDino>
      </div>
    </div>
  );
};

export default Banner;
