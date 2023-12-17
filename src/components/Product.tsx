import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";

const Product = (props: any) => {
  const [isWishList, setIsWishList] = useState(false);

  const handleWisList = () => {
    setIsWishList(!isWishList);
    props.handleWishListsProduct(props.product);
  };

  const handleAddCart = () => {
    props.handleAddProduct(props.product);
  }

  return (
    <div>
      <div className="relative p-8" style={{ backgroundColor: "#f3f3f3" }}>
        <img src={props.product.img} alt="" />
        <div
          className="absolute top-2 right-4 cursor-pointer"
          onClick={handleWisList}
        >
          {!isWishList ? (
            <HeartOutlined className="text-2xl text-orange-600" />
          ) : (
            <HeartFilled className="text-2xl text-orange-600" />
          )}
        </div>
      </div>
      <h1 className="my-4 text-md font-medium">{props.product.name}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          ${props.product.price.toFixed(2)}
        </h1>
        <button className="border-2  text-orange-600 rounded-md w-[120px] h-10 border-orange-600 hover:bg-orange-600 hover:text-white duration-500 font-medium" onClick={handleAddCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
