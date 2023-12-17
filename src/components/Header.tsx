import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Dino from "../assets/icon/Dino";
import WishList from "./WishList";
import CartList from "./CartList";

const Header = (props: any) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Dino></Dino>
        <h1 className="text-2xl font-medium">Dinomerch</h1>
      </div>
      <div className="flex items-center gap-14">
        <div className="group relative cursor-pointer">
          <div className="flex items-center gap-4 hover:text-red-500 duration-500">
            <ShoppingCartOutlined className="text-3xl" />
            <div className="flex items-center gap-2">
              <span className="text-lg">Cart</span>
              <span className="text-lg w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white">
                {props.listCart.length}
              </span>
            </div>
          </div>
          {props.listCart.length > 0 && (
            <div className="absolute z-10 bg-white top-[39px] md:right-4 right-[-150px] p-10 hidden group-hover:block border shadow-xl w-[600px]">
              <CartList
                listCart={props.listCart}
                handleQuantity={props.handleQuantity}
                handleRemove={props.handleRemove}
              ></CartList>
            </div>
          )}
        </div>

        <div className="group relative cursor-pointer">
          <div className="flex items-center gap-4 hover:text-red-500 duration-500">
            <HeartOutlined className="text-3xl" />
            <span className="text-lg">Wistlist</span>
          </div>
          {props.listWish.length > 0 && (
            <div className="absolute z-10 top-[39px] right-[50%] bg-white p-10 hidden group-hover:block border shadow-xl w-[300px]">
              <WishList listCart={props.listWish} handleAdd={props.handleAdd}></WishList>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
