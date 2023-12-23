
// eslint-disable-next-line react/prop-types
const TextInput = ({ value, setValue, placeholder, name }) => {

  return (
    <div className="relative px-4 py-3">
        <input
        placeholder={placeholder ? placeholder : ""}
        name={name}
        type='text'
        className='peer w-full focus:border-transparent active:border-transparent outline-none placeholder:capitalize'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        {/* input animation border */}
        <div className="absolute top-0 left-0 w-full h-full border border-c-blue-400 opacity-0 rounded-md  peer-focus:animate-input-active pointer-events-none bg-transparent"></div>

        {/* input border */}
        <div className="absolute top-0 left-0 w-full h-full border border-c-black-100/25 rounded-md peer-focus:border-transparent pointer-events-none bg-transparent"></div>
    </div>
  )
}

export default TextInput