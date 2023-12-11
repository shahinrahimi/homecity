import React from 'react'
import { Link } from 'react-router-dom'
import { useFranchiseStore } from '../../../app/store'
import FranchiseListItem from './FranchiseListItem'

const FranchiseList = () => {

  let franchises = useFranchiseStore.getState().franchises

  let content
  if (franchises && franchises.length === 0) {
    content = <>No franchise found</>
  } else {
    content = franchises.map((franchise, index) => <FranchiseListItem key={index} franchise={franchise} />)
  }


  return (
    <main className='flex flex-col'>
      <Link 
        to="new"
        className='bg-green-600 capitalize text-white hover:bg-green-500 transition-colors rounded-lg grid place-content-center'
      >create a new franchise</Link>
      <ul className='flex flex-col w-full gap-4 mt-4 justify-between items-center'>
        {content}
      </ul>
    </main>
  )
}

export default FranchiseList