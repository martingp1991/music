import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaInstagram, FaSpotify, FaSoundcloud } from "react-icons/fa";
import { artistData } from "../data";

const Artist = ({ selectedImageUrl}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const artists = artistData;
  const artist = artists[currentImageIndex];

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? artists.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === artists.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <section
      className="bg-section"
      style={{ backgroundImage: `url(${selectedImageUrl})` }}
    >
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <div className="max-w-lg mx-auto text-center mt-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            OUR ARTISTS
          </h2>
        </div>
        <div className="relative w-full mt-8 md:flex md:items-center xl:mt-12 z-0">
          <div className="absolute w-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-black -z-10 md:h-96 rounded-2xl"></div>
          <div className="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            {artist && (
              <img
                className="h-[32rem] w-80 md:mx-6 rounded-2xl object-cover md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl shadow-xl"
                src={artist.img}
                alt={artist.artist}
                style={{ boxShadow: "0 0 60px rgba(0, 0, 0, 4.9)" }}
              />
            )}
            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-bold tracking-tight text-white">
                  {artist.artist}
                </p>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-gray-200 md:text-xl">
                {artist.bio}
              </p>
              <div className="flex items-center justify-between mt-6 md:justify-start">
                <div style={{ display: "flex" }}>
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem" }}
                  >
                    <FaInstagram className="text-3xl text-white hover:text-gray-200" />
                  </a>
                  <a
                    href={artist.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem" }}
                  >
                    <FaSpotify className="text-3xl text-white hover:text-gray-200" />
                  </a>
                  <a
                    href={artist.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem" }}
                  >
                    <FaSoundcloud className="text-3xl text-white hover:text-gray-200" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-400"
                  onClick={handlePrevClick}
                >
                  <AiOutlineArrowLeft />
                </button>
                <button
                  title="right arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-gray-400"
                  onClick={handleNextClick}
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-auto mt-8 justify-items-center sm:grid-cols-2 lg:grid-cols-5">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`h-24 w-24 md:mx-6 object-cover md:h-[80%] md:w-[80%] md:max-w-[80%] md:max-h-[80%] shadow-xl cursor-pointer mt-14 ${
                currentImageIndex === index
                  ? "border-gray-500"
                  : "border-white"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={artist.img}
                alt={artist.artist}
                className="opacity-100 hover:border-gray-500 hover:opacity-50 filter saturate-0 rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artist;
