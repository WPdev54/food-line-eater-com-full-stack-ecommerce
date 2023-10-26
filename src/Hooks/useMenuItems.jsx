import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProviders"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useCart = (email) => {
    const {user , loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['menu'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/menu`)
            console.log('res from axios', res)
            console.log(res.data);                  
            return res.data;
        },
    })

    return [menu, refetch]

}
export default useCart