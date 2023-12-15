import { useQuery } from "react-query";
import { getAllMessages } from "../api";

export const useGetAllMessages = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('messages', getAllMessages, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id,
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })


    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateMessage = () => {

}

export const useCreateNewMessage = () => {
    
}

export const useDeleteMessage = () => {

}