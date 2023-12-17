import { useState } from "react";
import Header from "../components/Header";
import MainLayout from "../layout/MainLayout";
import swal from "sweetalert";
import CartItem from "../model/CartItem";
import { RollbackOutlined } from "@ant-design/icons";
import FormCheckOut from "../components/FormCheckOut";

const Checkout = () => {
  const cartLocal = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "{}")
    : [];
  const wishList = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList") || "{}")
    : [];

  const [cart, setCart] = useState(cartLocal as CartItem[]);

  const addToCart = (product: Product) => {
    const exist = cart.find((x) => x.product.id === product.id);
    if (!exist) {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { product, quanity: 1 }])
      );
      setCart([...cart, { product, quanity: 1 }]);
    } else {
      const newCart = cart.map((x) =>
        x.product.id === product.id
          ? { ...exist, quanity: exist.quanity + 1 }
          : x
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
    swal("Add successfully!", "Continue to buy", "success");
  };

  const handleQuantity = (product: Product, action: string) => {
    const exist = cart.find((x) => x.product.id === product.id);
    if (exist) {
      if (exist.quanity === 1 && action === "decrease") {
        removeProduct(product);
        swal("Item removed!", "Continue to buy", "success");
        return;
      }
      const newCart = cart.map((x) =>
        x.product.id === product.id
          ? {
              ...exist,
              quanity:
                action === "decrease" ? exist.quanity - 1 : exist.quanity + 1,
            }
          : x
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const removeProduct = (product: Product) => {
    const newCart = cart.filter((x) => x.product.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    swal("Item removed!", "Continue to buy", "success");
  };

  return (
    <MainLayout>
      <Header
        listCart={cart}
        listWish={wishList}
        handleAdd={addToCart}
        handleRemove={removeProduct}
        handleQuantity={handleQuantity}
      ></Header>
      <h1 className="text-orange-500 my-14 flex items-center gap-4 text-2xl">
        <RollbackOutlined />
        <a href="/">Back to homepage</a>
      </h1>
      <FormCheckOut></FormCheckOut>
    </MainLayout>
  );
};
export default Checkout;
