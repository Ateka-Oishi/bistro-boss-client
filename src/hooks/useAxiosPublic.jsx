import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'bistro-boss-server-with-aggregate-part-8.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;