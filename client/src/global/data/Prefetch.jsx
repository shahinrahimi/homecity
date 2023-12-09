import React from 'react'
import { Outlet } from 'react-router-dom'
import { getAllBlogs, getAllProjects } from '../../api'

import { useQuery } from 'react-query'
import { useBlogStore, useProjectStore } from '../../app/store'
import { Loading } from '../../components'

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
            return {...d, id: d._id, imagesSrc: d.images.map(image => `http://localhost:5000/${image}`), videoSrc:`http://localhost:5000/${d.video}` }
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

    if (!blogs) {
        return <PrefetchBlogs />
    }

    if (!projects){
        return <PrefetchProjects />
    }

    return <Outlet />
}

export default Prefetch