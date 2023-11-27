import React from 'react'
import { Section } from '../../../components'

const InstagramSection = ({ id, isDark , background }) => {
  return (
    <Section id={id} isDark={isDark} background={background} >
      <div>
          <video src='https://www.instagram.com/p/Czoog1DtfyV/' /> 
          <a href="https://www.instagram.com/p/CH_SLVaD48n/?igshid=MzRlODBiNWFlZA=="></a>
      </div>
    </Section>
  )
}

export default InstagramSection
