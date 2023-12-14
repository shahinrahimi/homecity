import React from 'react';
import { Section } from '../../components';
import { useFranchiseStore } from '../../app/store';
import {  background6 as bg } from "../../assets/img"
import FranchiseListItem from './FranchiseListItem';
const FranchisesPage = () => {
 
  const { franchises } = useFranchiseStore()
  
  return (
    <main className='py-20'>
      <Section background={bg} className="h-[calc(80vh)] grid place-content-center">
        <h1 className='text-6xl font-semibold text-center text-white drop-shadow-md mb-2'>Homecity</h1>
        <h1 className='text-4xl font-medium text-center text-white drop-shadow-md'>By investing $400,000 in the real estate sector, you can become a Turkish citizen.</h1>
        <p className='text-2xl font-medium text-center text-yellow-500 drop-shadow-sm'>Our professional and dynamic team of real estate investment consultants is ready to assist you with the most suitable options available.</p>
      </Section>
      <Section className="border-2 ">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative -top-40 gap-8'>
          {franchises.map((franchise,index)=> {
            return (
              <li key={index} className='p-2 grid place-content-center'>
                <FranchiseListItem franchise={franchise} />
              </li>
            )
          })}
        </ul>
      </Section>
    </main>
  )
}
export default FranchisesPage