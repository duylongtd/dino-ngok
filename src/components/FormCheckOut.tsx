import { useState } from "react";
import OrderDetail from "./OrderDetail";
import PaymentDetail from "./PaymentDetail";
import swal from "sweetalert";

const FormCheckOut = () => {

    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [cardHolder, setCardHolder] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [exDate, setExDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");


    const handleSubmit = () => {
        if (name === "" || lastName === "" || phoneNumber === "" || address === "" || cardHolder === "" || cardNumber === "" || exDate === "" || cvv === "") {
            swal("Hold on!", "Please fill out all fields", "error");
            return;
        }
        localStorage.removeItem("cart");
        swal("Good job!", "Submit order successfully", "success");
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }

  return (
    <form action="">
      <div className="grid grid-cols-2 gap-[40px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-medium">Shipping address</h1>
          <div className="flex flex-wrap gap-4 w-full">
            <div className="w-full flex gap-4 items-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName1" className="text-lg text-gray-500">
                  First name
                </label>
                <input
                  type="text"
                  className="border w-full h-10 border-gray-400 rounded-md px-4"
                  style={{ backgroundColor: "#f5f6f7" }}
                  id="firstName1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName2" className="text-lg text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border w-full h-10 border-gray-400 rounded-md px-4"
                  style={{ backgroundColor: "#f5f6f7" }}
                  id="firstName2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phoneNumber" className="text-lg text-gray-500">
                Phone number
              </label>
              <input
                type="text"
                className="border w-full h-10 border-gray-400 rounded-md px-4"
                style={{ backgroundColor: "#f5f6f7" }}
                id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="street" className="text-lg text-gray-500">
                Street address
              </label>
              <input
                type="text"
                className="border w-full h-10 border-gray-400 rounded-md px-4"
                style={{ backgroundColor: "#f5f6f7" }}
                id="street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <OrderDetail></OrderDetail>
        </div>

        <div>
          <h1 className="text-3xl font-medium">Payment detail</h1>
          <div className="flex flex-wrap gap-4 w-full">
            <div className="w-full flex gap-4">
              <div className="flex flex-col w-1/2">
                <h1>Visa payment</h1>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="cardHolder" className="text-lg text-gray-500">
                Cardholder Name
              </label>
              <input
                type="text"
                className="border w-full h-10 border-gray-400 rounded-md px-4"
                style={{ backgroundColor: "#f5f6f7" }}
                id="cardHolder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="cardHolderName" className="text-lg text-gray-500">
                Cardholder Number
              </label>
              <input
                type="text"
                className="border w-full h-10 border-gray-400 rounded-md px-4"
                style={{ backgroundColor: "#f5f6f7" }}
                id="cardHolderName"
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex gap-[50px] w-full">
              <div>
                <label htmlFor="exDate" className="text-lg text-gray-500">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="border w-full h-10 border-gray-400 rounded-md px-4"
                  style={{ backgroundColor: "#f5f6f7" }}
                  id="exDate"
                    value={exDate}
                    onChange={(e) => setExDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="CVV" className="text-lg text-gray-500">
                  CVV
                </label>
                <input
                  type="text"
                  className="border w-full h-10 border-gray-400 rounded-md px-4"
                  style={{ backgroundColor: "#f5f6f7" }}
                  id="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
          <PaymentDetail></PaymentDetail>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="w-[300px] bg-orange-600 h-[80px] p-2 text-white font-bold rounded-md hover:text-orange-600 border hover:border-orange-600 hover:bg-white"
              onClick={handleSubmit}
            >
              Submit order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormCheckOut;
