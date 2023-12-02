import React from 'react'
import { Outlet } from 'react-router-dom'
import { getAllBlogs, getAllTags, getAllFacilities, getAllProjects } from '../../api'

import { useQuery } from 'react-query'
import { useBlogStore, useTagStore, useFacilityStore, useProjectStore } from '../../app/store'
import { Loading } from '../../components'

const Prefetch = () => {

    const { setBlogs } = useBlogStore()
    const { setTags } = useTagStore()
    const { setFacilities } = useFacilityStore()
    const { setProjects } = useProjectStore()

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

    const {
        isSuccess: isTagSuccess,
        isLoading: isTagLoading,
        isError: isTagError,
        error: errorTag,
        data: tagsData,
    } = useQuery('tags', getAllTags, {
        select: data => data.map(d => {
            return {...d, id: d._id }
        }),
    })

    const {
        isSuccess: isFacilitySuccess,
        isLoading: isFacilityLoading,
        isError: isFacilityError,
        error: errorFacility,
        data: facilitiesData,
    } = useQuery('facilities', getAllFacilities, {
        select: data => data.map(d => {
            return {...d, id: d._id, iconSrc: `http://localhost:5000/${d.icon}` }
        }),
    })

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
        if (tagsData) setTags(tagsData)
    }, [tagsData, setTags])

    React.useEffect(() => {
        if (facilitiesData) setFacilities(facilitiesData)
    }, [setFacilities, facilitiesData])

    React.useEffect(() => {
        if (blogsData) setBlogs(blogsData)
    }, [blogsData, setBlogs])

    React.useEffect(() => {
        if (projectsData) setProjects(projectsData)
    }, [projectsData, setProjects])

    React.useEffect(() => {
        if (isError) console.error(`blogs`, error)
        if (isTagError) console.error(`tags`, errorTag)
        if (isProjectError) console.error("projects", error)
        if (isFacilityError) console.error("facilies", errorFacility)
    }, [error, errorTag, errorFacility, errorProject])

    let content = ""
    if (isLoading || isTagLoading || isFacilityLoading || isProjectLoading) content = <Loading />
    if (isSuccess && isTagSuccess || isFacilitySuccess || isProjectSuccess) content = <Outlet />

    return content
}

export default Prefetch