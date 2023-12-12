import React from 'react'
import { Outlet } from 'react-router-dom'
import { useBlogStore, useProjectStore, useFranchiseStore, useTagStore, useFacilityStore } from '../../app/store'
import { Loading } from '../../components'

import { useGetAllTags } from '../../hooks/useTagQuery'
import { useGetAllProjects } from '../../hooks/useProjectQuery'
import { useGetAllBlogs } from '../../hooks/useBlogQuery'
import { useGetAllFranchises } from '../../hooks/useFranchiseQuery'
import { useGetAllFacilities } from '../../hooks/useFacilityQuery'


const Prefetch = () => {
    // setBlogs and setProject does not requred here
    // they esist cuz after query this component rerender andso the outlet will return
    const { blogs, setBlogs } = useBlogStore()
    const { projects, setProjects } = useProjectStore()
    const { franchises, setFranchises } = useFranchiseStore()
    const { tags, setTags } = useTagStore()
    const { facilities, setFacilities } = useFacilityStore()

    const {
        isSuccess: isTagSuccess,
        isLoading: isTagLoading,
        isError: isTagError,
        error: tagError,
        data: tagData
    } = useGetAllTags()

    const {
        isSuccess: isBlogSuccess,
        isLoading: isBlogLoading,
        isError: isBlogError,
        error: blogError,
        data: blogData
    } = useGetAllBlogs()

    const {
        isSuccess: isProjectSuccess,
        isLoading: isProjectLoading,
        isError: isProjectError,
        error: projectError,
        data: projectData
    } = useGetAllProjects()

    const {
        isSuccess: isFranchiseSuccess,
        isLoading: isFranchiseLoading,
        isError: isFranchiseError,
        error: franchiseError,
        data: franchiseData
    } = useGetAllFranchises()

    const {
        isSuccess: isFacilitySuccess,
        isLoading: isFacilityLoading,
        isError: isFacilityError,
        error: facilityError,
        data: facilityData
    } = useGetAllFacilities()

    React.useEffect(() => {
        if (tagData){
            setTags(tagData)
        }
    },[tagData, setTags])

    React.useEffect(() => {
        if (projectData){
            setProjects(projectData)
        }
    },[projectData, setProjects])

    React.useEffect(() => {
        if (blogData){
            setBlogs(blogData)
        }
    },[blogData, setBlogs])

    React.useEffect(() => {
        if (franchiseData){
            setFranchises(franchiseData)
        }
    },[franchiseData, setFranchises])

    React.useEffect(() => {
        if (facilityData){
            setFacilities(facilityData)
        }
    },[facilityData, setFacilities])

    React.useEffect(() => {
        if (isTagError && tagError){
            console.log("fetch tag error", tagError)
        }
    }, [isTagError])

    React.useEffect(() => {
        if (isProjectError && projectError){
            console.log("fetch project error", projectError)
        }
    }, [isProjectError])

    React.useEffect(() => {
        if (isBlogError && blogError){
            console.log("fetch blog error", blogError)
        }
    }, [isBlogError])

    React.useEffect(() => {
        if (isFranchiseError && franchiseError){
            console.log("fetch franchise error", franchiseError)
        }
    }, [isFranchiseError])

    React.useEffect(() => {
        if (isFacilityError && facilityError){
            console.log("fetch facility error", facilityError)
        }
    }, [isFacilityError])

    if (isTagLoading || isProjectLoading || isBlogLoading || isFranchiseLoading || isFacilityLoading) return <Loading />
    if (
        isTagSuccess && tags &&
        isProjectSuccess && projects &&
        isBlogSuccess && blogs &&
        isFranchiseSuccess && franchises &&
        isFacilitySuccess && facilities
        ) {
        return <Outlet />
    }

    return <></>

}

export default Prefetch