import React from 'react';
import { Section, AddressInputSelect } from '../../components';
import { underConstructionSvg } from "../../assets/svg";
const FranchisesPage = () => {
  
  return (
    <Section>
      <main className="h-[calc(80vh)] grid place-content-center w-full">
        <img
          className="h-full w-[calc(50vw)]"
          src={underConstructionSvg} alt="" 
        />
      </main>
    </Section>
  )
}
export default FranchisesPage