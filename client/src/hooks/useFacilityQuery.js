import { useQuery } from 'react-query'
import { getAllFacilities } from '../api'
import { extractImageUrl } from '../utils/utils'
export const useGetAllFacilities = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('facilities', getAllFacilities, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id,
                iconSrc: extractImageUrl(d.icon)
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })


    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateFacility = () => {

}

export const useCreateNewFacility = () => {
    
}

export const useDeleteFacility = () => {

}

