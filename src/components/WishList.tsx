interface WishListProps {
  listCart: Product[];
  handleAdd: (product: Product) => void;
}

const WishList = ({ listCart, handleAdd }: WishListProps) => {
  return (
    <div>
      {listCart.map((product: Product) => {
        return (
          <div
            className="flex items-center justify-between mb-4 gap-4 border-b border-black pb-4"
            key={product.id}
          >
            <img src={product.img} alt="" className="w-24" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{product.name}</span>
              <span className="text-md font-bold my-2">
                ${product.price.toFixed(2)}
              </span>
              <button
                className="border-2  text-orange-600 rounded-md w-[120px] h-10 border-orange-600 hover:bg-orange-600 hover:text-white duration-500 font-medium"
                onClick={() => handleAdd(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
