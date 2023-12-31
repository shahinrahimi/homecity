import { useQuery } from 'react-query'
import { getAllBlogs } from '../api'
import { extractImageUrl } from '../utils/utils'
export const useGetAllBlogs = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('blogs', getAllBlogs, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id, 
                imageSrc: extractImageUrl(d.image)
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })

    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateBlog = () => {

}

export const useCreateNewBlog = () => {
    
}

export const useDeleteBlog = () => {

}