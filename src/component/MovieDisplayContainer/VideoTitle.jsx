import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
const VideoTitle = () => {
  return (
    <>
        <div className=" aspect-video absolute left-7 bottom-9 text-white pt[18%] p-12">
            <h1 className="text-3xl font-bold">Priyanka shaw</h1>
            <p>She nervously peered over the edge. She understood in her mind that the view was supposed</p>
            <div className="flex mt-8 gap-5">
                <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
                   <FaPlay size= "24px"/>
                    <span>Play</span>
                </button>
                <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
                   <IoIosInformationCircle size= "24px"/>
                    <span>Watch More</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default VideoTitle
