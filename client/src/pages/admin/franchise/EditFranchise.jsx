import React from 'react'
import { useParams } from 'react-router-dom'
import EditFranchiseForm from './EditFranchiseForm'
import { useFranchiseStore } from '../../../app/store'


const EditFranchise = () => {
  
  const { id } = useParams()
  const franchise = useFranchiseStore((state) => state.getFranchiseById(id))

  if (!franchise){
    return <div>Not Found</div>
  }
  
  return <EditFranchiseForm franchise={franchise} />
}

export default EditFranchise