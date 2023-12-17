import CartItem from "../model/CartItem";

const PaymentDetail = () => {
  const cartLocal = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "{}")
    : [];

  const total = () => {
    let total = 0;
    cartLocal.forEach((item: CartItem) => {
      total += item.product.price * item.quanity;
    });
    return total;
  };

  return (
    <div>
      <div className="mt-12 flex flex-col justify-center gap-4">
        <h1 className="text-2xl">Order Summary</h1>
        <div className="border-b pb-4 flex flex-col gap-4 text-base font-medium text-gray-500">
          <div className="flex items-center justify-between">
            <span>Items ({cartLocal.length})</span>
            <span>${total().toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipment Cost: </span>
            <span>${(6.5).toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Tax Collected:</span>
            <span>${(0.8).toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <span className="text-gray-800 text-lg font-bold">Order total:</span>
          <span className="font-bold text-xl text-gray-600">
            ${(total() + 6.5 + 0.8).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
