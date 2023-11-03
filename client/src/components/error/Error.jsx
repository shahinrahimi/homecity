const Error = ({ error }) => {
  return (
    <section>
      <h1>We are sorry there is a problem</h1>
      <h3>code: {error?.status}</h3>
      <h2>message: {error?.data?.message}</h2>
    </section>
  )
}
export default Error