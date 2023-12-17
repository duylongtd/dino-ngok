import CartItem from "../model/CartItem";

const OrderDetail = () => {
  const cartLocal = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "{}")
    : [];

  return (
    <div className="mt-14">
      <h1>Order detail</h1>
      <div
        className="py-4 px-10 w-full"
        style={{ backgroundColor: "#f5f6f7" }}
      >
        <div>
          {cartLocal.map((item: CartItem) => {
            return (
              <div
                className="flex mb-4 pb-4 justify-between items-center"
                key={item.product.id}
              >
                <img className="w-20" src={item.product.img} alt="" />
                <div className="flex flex-col w-[200px]">
                  <span className="font-medium">{item.product.name}</span>
                  <span>
                    Price:{" "}
                    <span className="font-medium">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </span>
                  <span>
                    Quantity:{" "}
                    <span className="font-medium">{item.quanity}</span>
                  </span>
                </div>
                <span className="font-bold">
                  ${(item.product.price * item.quanity).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
