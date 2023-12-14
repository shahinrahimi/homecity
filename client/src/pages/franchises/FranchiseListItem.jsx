import React from 'react'
import { Link } from 'react-router-dom'
const FranchiseListItem = ({ franchise }) => {
    const {
        id,
        title,
        coverSrc
    } = franchise
  return (
    <Link to={`${id}`} className='shadow-sharp rounded-lg hover:scale-[calc(1.01)] group transition-all font-semibold'>
        <div className="rounded-t-xl overflow-hidden">
          <img src={coverSrc} alt="" className='group-hover:scale-105 transition-all' />
        </div>
        <div className="grid place-content-center p-3 bg-slate-200 rounded-b-lg">
          <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default FranchiseListItem