import { AiFillDollarCircle } from 'react-icons/ai'

const BottomNotifier = () => {
  return (
    <div className="bg-white text-slate-900 fixed left-0 bottom-0 w-20 h-20 rounded-full m-3 grid place-content-center hover:bg-yellow-300 cursor-pointer origin-left transition-all duration-1000 hover:rounded-sm hover:scale-x-150">
      <AiFillDollarCircle

        className='text-2xl'
      />
    </div>
  )
}
export default BottomNotifier