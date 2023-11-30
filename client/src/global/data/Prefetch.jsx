import React from 'react'
import { Outlet } from 'react-router-dom'
import { getAllBlogs, getAllTags } from '../../api'

import { useQuery } from 'react-query'
import { useBlogStore, useTagStore } from '../../app/store'
import { Loading } from '../../components'

const Prefetch = () => {

    const { setBlogs } = useBlogStore()
    const { setTags } = useTagStore()

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
    
    React.useEffect(() => {
        if (tagsData) setTags(tagsData)
    }, [tagsData, setTags])

    React.useEffect(() => {
        console.log("useEffect data ran")
        console.log(blogsData)
        if (blogsData) setBlogs(blogsData)
    }, [blogsData, setBlogs])

    React.useEffect(() => {
        if (isError) console.error(`blogs`, error)
        if (isTagError) console.error(`tags`, errorTag)
    }, [error, errorTag])

    let content = ""
    if (isLoading || isTagLoading) content = <Loading />
    if (isSuccess && isTagSuccess) content = <Outlet />

    return content
}

export default Prefetch