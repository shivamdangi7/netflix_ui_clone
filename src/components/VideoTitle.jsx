const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black via-transparent to-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:block py-4 md:py-6 text-sm md:text-lg lg:text-xl w-[90%] md:w-1/2 text-white/80">{overview.split(' ').slice(0, 17).join(' ') + (overview.split(' ').length > 20 ? '...' : '')}</p>
        <div className="my-4 md:m-0">
          <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;