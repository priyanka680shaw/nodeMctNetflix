import VideoTitle from "./VideoTitle"
const VideoBackground = () => {
  return (
    <>
    <div className=" w-screen h-screen overflow-x-hidden flex justify-center items-center flex-col bg-red-300">
     
        <iframe className="w-screen aspect-video  "
        src="https://www.youtube.com/embed/hHiGP3NAe2Q?si=oc1OFyBLpvWq6MuA" title="YouTube video player"   allowFullScreen></iframe>
       
      <VideoTitle/>
    </div>
   
    </>
    
  )
}

export default VideoBackground
