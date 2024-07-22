import axios from "axios";
export default function useAxios() {
    const rtConfig = useRuntimeConfig();
    let api = axios.create({
        baseURL: rtConfig.public.API_URL,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        withCredentials: true,
        withXSRFToken: true,
    });

    return api;
}