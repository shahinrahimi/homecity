import React from 'react';
import { Section } from '../../components';
import { useFranchiseStore } from '../../app/store';
import {  background1 as bg } from "../../assets/img"
import FranchiseListItem from './FranchiseListItem';
import { FranchiseTicker } from '../../container';
import { useTranslation } from 'react-i18next';
const FranchisesPage = () => {
 
  const { franchises } = useFranchiseStore()
  const { t } = useTranslation()
  
  return (
    <main className='py-20'>
      <Section background={bg} className="min-h-[calc(40vh)] grid place-content-center">
        <h1 className='text-4xl font-medium text-center text-white drop-shadow-md'>{t("franchises_page_h")}</h1>
        <p className='text-2xl font-medium text-center text-yellow-500 drop-shadow-sm'>{t("franchises_page_p")}</p>
      </Section>
      <Section className="border-2 ">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative -top-20 gap-8'>
          {franchises.map((franchise,index)=> {
            return (
              <li key={index} className='p-2 grid place-content-center'>
                <FranchiseListItem franchise={franchise} />
              </li>
            )
          })}
        </ul>

        <FranchiseTicker />
      </Section>
    </main>
  )
}
export default FranchisesPage