import CountUp from "react-countup"
import React from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Counter = ({ count, duration, className }) => {
  const { lang } = React.useContext(LanguageContext)
  const formatString = React.useCallback((value) => {
    if (lang === "fa" || lang ==="ar"){
      return (value).toLocaleString("fa-IR")
    }
    return value;
  })

  return (
    <>
      <span className={`${className}`}>
        <CountUp 
          duration={duration} 
          end={count} 
          enableScrollSpy="true"
          formattingFn={formatString}
          />
      </span>
    </>
  )
}
export default Counter