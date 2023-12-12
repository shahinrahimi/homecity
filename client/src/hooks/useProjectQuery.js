import { useQuery } from 'react-query'
import { getAllProjects } from '../api'

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
                        iconSrc: `http://localhost:5000/${facility.icon}`
                    }
                }),
                coverSrc: d.cover.map(cover => `http://localhost:5000/${cover}`),
                imagesSrc: d.images.map(image => `http://localhost:5000/${image}`), 
                videoSrc:d.video.map(video => `http://localhost:5000/${video}`),
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

