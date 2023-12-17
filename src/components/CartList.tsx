import {
  DeleteOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import CartItem from "../model/CartItem";
import { useEffect, useState } from "react";

interface CartListProps {
  listCart: CartItem[];
  handleQuantity: (product: Product, action: string) => void;
  handleRemove: (product: Product) => void;
}

const CartList = ({
  listCart,
  handleQuantity,
  handleRemove,
}: CartListProps) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    listCart.forEach((item) => {
      total += item.product.price * item.quanity;
    });
    setTotal(total);
  }, [listCart]);

  return (
    <div>
      {listCart.map((item: CartItem) => {
        return (
          <div
            className="flex items-center justify-between mb-6 gap-3 border-b-2 p-2"
            key={item.product.id}
          >
            <div className="flex items-center gap-2 w-[250px]">
              <img src={item.product.img} alt="" className="w-24" />
              <h1 className="whitespace-nowra text-sm font-medium">
                {item.product.name}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <MinusSquareOutlined
                onClick={() => handleQuantity(item.product, "decrease")}
              />
              <span>{item.quanity}</span>
              <PlusSquareOutlined
                onClick={() => handleQuantity(item.product, "increase")}
              />
            </div>
            <span className="text-md font-bold">
              ${(item.product.price * item.quanity).toFixed(2)}
            </span>
            <DeleteOutlined
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemove(item.product)}
            />
          </div>
        );
      })}
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button className="bg-orange-600 text-white w-[100px] p-2 hover:bg-orange-700 rounded-md duration-500 text-md">
          <a href="/checkout">Checkout</a>
        </button>
      </div>
    </div>
  );
};
export default CartList;
