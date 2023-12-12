import { useQuery } from 'react-query'
import { getAllFranchises } from '../api'

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
                brandSrc: d.brand.map(brand => `http://localhost:5000/${brand}`),
                coverSrc: d.cover.map(cover => `http://localhost:5000/${cover}`),
                imagesSrc: d.images.map(image => `http://localhost:5000/${image}`),
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
