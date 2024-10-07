import { useContext } from "react";
import AuthAwareService from "../services/auth-aware/AuthAwareService";
import { AuthContext } from "../components/auth/auth/Auth";
import axios, { AxiosInstance } from "axios";

function useService<T extends AuthAwareService>(Service: { new(axiosInstance: AxiosInstance): T }): T {
    const { jwt } = useContext(AuthContext)

    const axiosIstance = axios.create({
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })

    const service = new Service(axiosIstance)

    return service
}

export default useService;