import { useQuery } from 'react-query'
import { getAllFacilities } from '../api'

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
                iconSrc: `http://localhost:5000/${d.icon}`
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

