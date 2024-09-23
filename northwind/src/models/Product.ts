import BaseProduct from "./BaseProduct";

interface Product extends BaseProduct{
    id: number;
    imageUrl: string;
}

export default Product
