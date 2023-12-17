import { useEffect, useState } from "react";
import ICons from "../constant/Const";
import Product from "./Product";

const Products = (props : any) => {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const respone = await fetch(ICons.FETCH_PRODUCTS);
            const data = await respone.json();
            setProducts(data.products);
        }
        fetchData();
    }, []);

    return (
        <div id="products" className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Product handleAddProduct={props.handleAdd} handleWishListsProduct={props.handleWishList} product={product}></Product>
                    </div>
                )
            })}
        </div>
    );
}

export default Products;