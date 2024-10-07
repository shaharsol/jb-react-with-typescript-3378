import config from "../../util/config";
import AuthAwareService from "./AuthAwareService";
import CategoryModel from "../../models/Category";

class Category extends AuthAwareService {
    public async getAll(): Promise<CategoryModel[]> {

        const response = await this.axiosIntance<CategoryModel[]>(`${process.env.REACT_APP_REST_SERVER}/${config.categoriesPath}`);
        const products = response.data
        return products

    }

}

export default Category


/*

axios solution for recurring jwt calls (so the jwt is always included)

1. interceptors

we can hook into axios and modify each request before it is invoked
or each response before it is returned.

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${jwt}`
    return config
})


2. instance

import axios from 'axios'
axios.get...

const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

axiosInstance.get...
axiosInstance.post...
axiosInstance.put...


*/
