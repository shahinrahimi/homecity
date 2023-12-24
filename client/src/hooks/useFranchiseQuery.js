import { useQuery } from 'react-query'
import { getAllFranchises } from '../api'
import { extractImageUrl } from '../utils/utils'
export const useGetAllFranchises = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('franchises', getAllFranchises, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id,
                brandSrc: d.brand.map(brand => extractImageUrl(brand)),
                coverSrc: d.cover.map(cover => extractImageUrl(cover)),
                imagesSrc: d.images.map(image => extractImageUrl(image)),
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })


    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateFranchise = () => {

}

export const useCreateNewFranchise = () => {
    
}

export const useDeleteFranchise = () => {

}
