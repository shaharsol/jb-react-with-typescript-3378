import BaseProduct from "./BaseProduct";

interface ProductDraft extends BaseProduct {
    image: File;
    list: FileList
}

export default ProductDraft
