import { useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import MainLayout from "../layout/MainLayout";
import CartItem from "../model/CartItem";
import Header from "../components/Header";
import swal from "sweetalert";

const Home = () => {
    //get local storage
    const [cart, setCart] = useState<CartItem[]>(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : []);
    const [wishList, setWishList] = useState<Product[]>(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist') || '{}') : []);

    //set list as localstorage
    // const [wishList, setWishList] = useState<Product[]>(wishListLocal as Product[]);
    // const [cart, setCart] = useState<CartItem[]>(cartLocal as CartItem[]);

    const addToWishList = (product: Product) => {
        const exist = wishList.find((x) => x.id === product.id);
        if (!exist) {
            setWishList([...wishList, product]);
        } else {
            const newWishList = wishList.filter((x) => x.id !== product.id);
            setWishList(newWishList);
        }
        localStorage.setItem('wishlist', JSON.stringify([...wishList, product]));
    }

    const addToCart = (product: Product) => {
        const exist = cart.find((x) => x.product.id === product.id);
        if (!exist) {
            localStorage.setItem('cart', JSON.stringify([...cart, { product, quanity: 1 }]));
            setCart([...cart, { product, quanity: 1 }]);
        } else {
            const newCart = cart.map((x) => x.product.id === product.id ? { ...exist, quanity: exist.quanity + 1 } : x);
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
        }
        swal("Add successfully!", "Continue to buy", "success");
    }

    const handleQuantity = (product: Product, action: string) => {
        const exist = cart.find((x) => x.product.id === product.id);
        if (exist) {
            if (exist.quanity === 1 && action === 'decrease') {
                removeProduct(product);
                swal("Item removed!", "Continue to buy", "success");
                return;
            }
            const newCart = cart.map((x) => x.product.id === product.id ? { ...exist, quanity: action === 'decrease' ? exist.quanity - 1 : exist.quanity + 1 } : x);
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
        }
    }

    const removeProduct = (product: Product) => {
        const newCart = cart.filter((x) => x.product.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
        swal("Item removed!", "Continue to buy", "success");
    }


    return (
        <MainLayout>
            <Header listCart={cart} listWish={wishList} handleAdd={addToCart} handleRemove={removeProduct} handleQuantity={handleQuantity}></Header>
            <Banner></Banner>
            <h1 className="flex text-5xl font-bold items-center justify-center my-14">Chrome Dino Merch</h1>
            <Products handleAdd={addToCart} handleWishList={addToWishList} ></Products>
        </MainLayout>
    );
}

export default Home;