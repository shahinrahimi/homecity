import React from 'react'
import { Link } from 'react-router-dom';
import { IoBedOutline as BedroomIcon } from "react-icons/io5"
import { LuBath as BathroomIcon } from "react-icons/lu"

function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

const ProjectCard = ({ project }) => {
    const {
        id,
        title,
        summary,
        startingPrice,
        maxRoomCount,
        maxBathCount,
        coverSrc,
        imagesSrc,
        videoSrc,
        country,
        city,
        district
    } = project

    return (
        <Link
        to={`/projects/${id}`}
        className="w-[calc(320px)] h-[calc(600px)] bg-white shadow-sharp flex flex-col justify-start items-center rounded-t-xl rounded-b-md  overflow-hidden">
            {/* image */}
            <div className="w-full overflow-hidden basis-2/5 shrink-0">
                <img
                className="object-cover h-full w-full"
                src={coverSrc[0]}
                />
            </div>

            {/* content */}
            <div className="w-full px-4 py-2 flex flex-col justify-start gap-2 h-[calc(65%)]">

                <div className="w-full">
                <h3 className="text-slate-500 uppercase font">Starting from</h3>
                <h2 className="text-slate-800 text-2xl"> {startingPrice === 0 ? "call for updated info" : "$" + nFormatter(startingPrice,0)}</h2>
                <h4 className="text-slate-600 font-normal capitalize">{city}, {district}</h4>
                </div>

                <div className="flex gap-2 justify-between items-center border-b-2 border-t-2 border-black/20 py-2 w-[calc(95%)]">
                <div className="flex flex-col gap-1 justify-start items-center">
                    <BedroomIcon
                    className="text-4xl text-gray-600"
                    />
                    <div className="flex gap-1">
                    <div className="flex whitespace-nowrap font-bold">1-{maxRoomCount}</div>
                    <div>Bedroom</div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 justify-start items-center">
                    <BathroomIcon
                    className="text-4xl text-gray-600"
                    />
                    <div className="flex gap-1">
                    <div className="flex whitespace-nowrap font-bold">1-{maxBathCount}</div>
                    <div>Bathroom</div>
                    </div>
                    
                </div>
                </div>

                {/* description */}
                <div className="">
                    <p>{summary.length > 150 ? summary.slice(0,149) + "..." : summary}</p>
                </div>


            </div>

            <div className="bg-white py-4 w-full grid place-content-center">
                <button
                className="bg-gray-400/90 px-6 py-2 text-white font-bold rounded-lg shadow-lg whitespace-nowrap hover:bg-red-500 transition-colors"
                >
                More Details
                </button>
            </div>
        </Link>
    )
}

export default ProjectCard