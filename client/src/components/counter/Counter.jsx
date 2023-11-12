import CountUp from "react-countup"

const Counter = ({ count, duration, className }) => {
  return (
    <>
      <span className={`${className}`}>
        <CountUp duration={duration} end={count} enableScrollSpy="true" />
      </span>
    </>
  )
}
export default Counter