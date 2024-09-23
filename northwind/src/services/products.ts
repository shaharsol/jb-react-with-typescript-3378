import axios from "axios";
import Product from "../models/Product";
import config from "../util/config";

class Products {
    public async getAll(): Promise<Product[]> {

        // REACT_APP_REST_SERVER = http://localhost:3030
        // REACT_APP_REST_SERVER = https://myserver:80
        const response = await axios<Product[]>(`${process.env.REACT_APP_REST_SERVER}/${config.productsPath}`);
        const products = response.data
        return products

    }

    public async getOne(id: number): Promise<Product> {
        const response = await axios<Product>(`${process.env.REACT_APP_REST_SERVER}/${config.productsPath}/${id}`);
        const product = response.data
        return product
    }
}

const products = new Products();
export default products






