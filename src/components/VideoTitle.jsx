const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black via-transparent to-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:block py-4 md:py-6 text-sm md:text-lg lg:text-xl w-[90%] md:w-1/2 text-white/80">{overview.split(' ').slice(0, 17).join(' ') + (overview.split(' ').length > 20 ? '...' : '')}</p>
        <div className="my-4 md:m-0">
          <button className="relative overflow-hidden bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg shadow-2xl transition-all duration-700 before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-10 before:duration-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:before:-translate-x-40">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2 relative overflow-hidden bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg shadow-2xl transition-all duration-700 before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:before:-translate-x-40">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;