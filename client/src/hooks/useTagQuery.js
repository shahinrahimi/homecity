import { useQuery } from 'react-query'
import { getAllTags } from '../api'

export const useGetAllTags = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('tags', getAllTags, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })


    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateTag = () => {

}

export const useCreateNewTag = () => {
    
}

export const useDeleteTag = () => {

}

