import { useQuery } from 'react-query'
import { getAllProjects } from '../api'
import { extractImageUrl } from '../utils/utils'
export const useGetAllProjects = () => {

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data,
    } = useQuery('projects', getAllProjects, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id,
                facilities: d.facilities.map(facility => {
                    return {
                        ...facility,
                        iconSrc: extractImageUrl(facility.icon)
                    }
                }),
                coverSrc: d.cover.map(cover => extractImageUrl(cover)),
                imagesSrc: d.images.map(image => extractImageUrl(image)), 
                videoSrc:d.video.map(video => extractImageUrl(video)),
            }
        }),
        refetchOnWindowFocus: false,
        staleTime: Infinity
    })


    return { isSuccess, isLoading, isError, error, data }
}

export const useUpdateProject = () => {

}

export const useCreateNewProject = () => {
    
}

export const useDeleteProject = () => {

}

