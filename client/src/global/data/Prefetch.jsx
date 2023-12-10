import React from 'react'
import { Outlet } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAllBlogs, getAllProjects, getAllTags, getAllFacilities } from '../../api'
import { useBlogStore, useProjectStore, useTagStore, useFacilityStore } from '../../app/store'
import { Loading } from '../../components'

const PrefetchTags = () => {

    const { setTags } = useTagStore()

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data: tagsData,
    } = useQuery('tags', getAllTags, {
        select: data => data.map(d => {
            return {...d, id: d._id}
        })
    })

    React.useEffect(() => {
        if (tagsData) setTags(tagsData)
    }, [tagsData, setTags])

    return <Loading />
}

const PrefetchFacilities = () => {

    const { setFacilities } = useFacilityStore()

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data: facilitiesData,
    } = useQuery('facilities', getAllFacilities, {
        select: data => data.map(d => {
            return {...d, id: d._id, iconSrc: `http://localhost:5000/${d.icon}`}
        })
    })

    React.useEffect(() => {
        if (facilitiesData) setFacilities(facilitiesData)
    }, [facilitiesData, setFacilities])


    return <Loading />
}

const PrefetchBlogs = () => {

    const { setBlogs } = useBlogStore()

    const {
        isSuccess,
        isLoading,
        isError,
        error,
        data: blogsData,
    } = useQuery('blogs', getAllBlogs, {
        select: data => data.map(d => {
            return {...d, id: d._id, imageSrc: `http://localhost:5000/${d.image}`}
        })
    })

    React.useEffect(() => {
        if (blogsData) setBlogs(blogsData)
    }, [blogsData, setBlogs])

    return <Loading />
}

const PrefetchProjects = () => {
    const { setProjects } = useProjectStore()

    const {
        isSuccess: isProjectSuccess,
        isLoading: isProjectLoading,
        isError: isProjectError,
        error: errorProject,
        data: projectsData,
    } = useQuery('projects', getAllProjects, {
        select: data => data.map(d => {
            return {
                ...d, 
                id: d._id,
                coverSrc: d.cover.map(cover => `http://localhost:5000/${cover}`),
                imagesSrc: d.images.map(image => `http://localhost:5000/${image}`), 
                videoSrc:d.video.map(video => `http://localhost:5000/${video}`),
            }
        }),
    })

    React.useEffect(() => {
        if (projectsData) setProjects(projectsData)
    }, [projectsData, setProjects])

    return <Loading />

}

const Prefetch = () => {
    // setBlogs and setProject does not requred here
    // they esist cuz after query this component rerender andso the outlet will return
    const { setBlogs } = useBlogStore()
    const blogs = useBlogStore.getState().blogs
    const { setProjects } = useProjectStore()
    const projects = useProjectStore.getState().projects
    const { setTags } = useTagStore()
    const tags = useTagStore.getState().tags
    const { setFacilities } = useFacilityStore()
    const facilities = useFacilityStore.getState().facilities 

    if (!blogs) {
        return <PrefetchBlogs />
    }

    if (!projects){
        return <PrefetchProjects />
    }

    if (!tags){
        return <PrefetchTags />
    }

    if (!facilities){
        return <PrefetchFacilities />
    }

    return <Outlet />
}

export default Prefetch