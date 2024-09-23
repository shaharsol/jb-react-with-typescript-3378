import ProductDraft from "./ProductDraft";

interface Product extends ProductDraft{
    id: number;
    imageUrl: string;
}

export default Product
