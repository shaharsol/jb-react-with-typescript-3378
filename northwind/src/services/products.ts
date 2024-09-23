import axios from "axios";
import Product from "../models/Product";
import config from "../util/config";
import ProductDraft from "../models/ProductDraft";

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

    public async delete(id: number): Promise<boolean> {
        const response = await axios.delete<boolean>(`${process.env.REACT_APP_REST_SERVER}/${config.productsPath}/${id}`);
        const isDeleted = response.data
        return isDeleted
    }

    public async add(productDraft: ProductDraft): Promise<Product> {
        const axiosConfig = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        const response = await axios.post<Product>(`${process.env.REACT_APP_REST_SERVER}/${config.productsPath}`, productDraft, axiosConfig);
        const product = response.data
        return product
    }

    public async update(id: number, productDraft: ProductDraft): Promise<Product> {
        const axiosConfig = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        const response = await axios.put<Product>(`${process.env.REACT_APP_REST_SERVER}/${config.productsPath}/${id}`, productDraft, axiosConfig);
        const product = response.data
        return product
    }

}

const products = new Products();
export default products






