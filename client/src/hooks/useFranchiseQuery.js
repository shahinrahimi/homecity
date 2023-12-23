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
                brandSrc: d.brand.map(brand => `${process.env.NODE_ENV === "development" ? "http://localhost:5000/" + brand : brand}`),
                coverSrc: d.cover.map(cover => `${process.env.NODE_ENV === "development" ? "http://localhost:5000/" + cover : cover}`),
                imagesSrc: d.images.map(image => `${process.env.NODE_ENV === "development" ? "http://localhost:5000/" + image : image}`),
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
