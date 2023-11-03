import CountUp from "react-countup"

const Counter = ({ count, duration }) => {
  return (
    <>
      <span>
        <CountUp duration={duration} end={count} enableScrollSpy="true" />
      </span>
    </>
  )
}
export default Counter