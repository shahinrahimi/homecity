import React from 'react'
import { Outlet } from 'react-router-dom'
import { getAllBlogs } from "../../api/blogApi"
import { useQuery } from 'react-query'
import { useBlogStore } from '../../app/store'
import { Loading } from '../../components'

const Prefetch = () => {

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
        }),
    })

    React.useEffect(() => {
        if (blogsData){
            setBlogs(blogsData)
        }

    }, [blogsData, setBlogs])

    let content = ""

    if (isLoading){
        content = <Loading />
    }

    if (isSuccess){
        content = <Outlet />
    }

  return content
}

export default Prefetch