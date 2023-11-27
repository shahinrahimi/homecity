import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { LanguageContext } from "../../../context/LanguageContext"
import { info_1, info_2, info_3 } from "../../../assets/img"
import { Section } from "../../../components"

const InformationSection = ({ id, isDark , background }) => {


  const { t } = useTranslation()
  const { dir } = useContext(LanguageContext)

  const InfoItem = ({
    children,
    image,
    dir = 'ltr',
    reverse = false
  }) => {

    const imagePart = (
      <img
        src={image}
        alt={'anything'}
        className="object-cover bg-no-repeat bg-center rounded-lg w-full md:w-1/2"
        data-aos={dir === 'ltr' && !reverse ? `fade-right` : 'fade-left'}
      />
    )

    const contentPart = (
      <div
        className="w-full md:w-1/2 mb-4"
        data-aos={dir === 'ltr' && !reverse ? `fade-left` : 'fade-right'}
      >
        {children}
      </div>
    )

    return (
      <li className={`flex flex-col md:flex-row gap-4 justify-center items-center ${dir === 'ltr' && !reverse ? 'flex-row-reverse' : ""}`}>
        {imagePart}
        {contentPart}
      </li >
    )
  }

  const InfoContent = ({ data, dir }) => {
    const dataObj = t(data, { returnObjects: true })
    const {
      title,
      contents,
      benefits
    } = dataObj

    return (
      <div className="m-4">
        <h3
          dir={dir}
          className="text-lg font-semibold mb-2"
        >
          {title}
        </h3>
        {contents.map((content, index) => {
          return (
            <p
              dir={dir}
              className="text-justify"
              key={index}
            >
              {content}
            </p>
          )
        })}
        <ul className="list-disc">
          {benefits.map((benefit, index) => {
            return (
              <li
                key={index}
                dir={dir}
                className="text-justify"
              >
                {benefit}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <Section id={id} isDark={isDark} background={background}>
      <ul>
        <InfoItem image={info_1} dir={dir}>
          <InfoContent data={'info_1'} dir={dir} />
        </InfoItem>

        <InfoItem image={info_2} dir={dir} reverse={true}>
          <InfoContent data={'info_2'} dir={dir} />
        </InfoItem>

        <InfoItem image={info_3}>
          <InfoContent data={'info_3'} dir={dir} />
        </InfoItem>
      </ul>
    </Section>
  )
}

export default InformationSection 