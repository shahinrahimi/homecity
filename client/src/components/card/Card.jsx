import { IoBedOutline as BedroomIcon } from "react-icons/io5"
import { LuBath as BathroomIcon } from "react-icons/lu"
import { MdCallEnd as CallIcon } from "react-icons/md";

const Card = ({ image, price, address, bedroomCount, bathroomCount }) => {
  return (
    <div className="w-[calc(300px)] h-[calc(600px)] bg-c-white-000 flex flex-col justify-start items-center rounded-2xl  overflow-hidden">
      {/* image */}
      <div className="w-full overflow-hidden h-[calc(45%)]">
        <img
          className="object-cover h-full w-full"
          src={image}
        />
      </div>

      {/* content */}
      <div className="w-full px-4 py-2 flex flex-col justify-start gap-2 h-[calc(65%)]">

        <div className="w-full">
          <h3 className="text-slate-500 uppercase font">Starting from</h3>
          <h2 className="text-slate-800 text-2xl">${price},000</h2>
          <h4 className="text-slate-600 font-normal">{address}</h4>
        </div>

        <div className="flex gap-2 justify-between items-center border-b-2 border-t-2 border-black/20 py-2 w-[calc(95%)]">
          <div className="flex flex-col gap-1 justify-start items-center">
            <BedroomIcon
              className="text-4xl text-gray-600"
            />
            <div className="flex gap-1">
              <div className="flex whitespace-nowrap font-bold">{bedroomCount}</div>
              <div>Bedroom</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-start items-center">
            <BathroomIcon
              className="text-4xl text-gray-600"
            />
            <div className="flex gap-1">
              <div className="flex whitespace-nowrap font-bold">{bathroomCount}</div>
              <div>Bathroom</div>
            </div>
            
          </div>
        </div>

        {/* description */}
        <div className="">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque libero provident laboriosam pariatur totam. Nisi.</p>
        </div>


      </div>

      <div className="bg-white py-4 w-full flex items-center shadow-sharp justify-between px-4">
        <button
          className="bg-blue-600 px-6 py-2 text-white font-bold rounded-lg shadow-lg whitespace-nowrap hover:bg-blue-500 transition-colors"
        >
          Buy now
        </button>

        <button
          className="bg-green-600 px-6 py-2 text-white font-bold rounded-lg shadow-lg whitespace-nowrap flex items-center hover:bg-green-500 transition-colors"
        >
          <CallIcon className="text-2xl"/>
        </button>

        {/* <Button 
          text={"More Details"}
        /> */}
      </div>

      {/* icons */}
      

      



    </div>
  )
}
export default Card