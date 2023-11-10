import { useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { PiPlay, PiPause } from "react-icons/pi";
import { FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiBeatport } from "react-icons/si";
import { data } from "../data";

const List = ({ selectedImageUrl, onPlayButtonClick }) => {
  const [playingId, setPlayingId] = useState(null);
  const [showIcons, setShowIcons] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handlePlayClick = (id, artwork) => {
    setPlayingId(id === playingId ? null : id);
    onPlayButtonClick({
      id,
      artwork,
      title: data.find((item) => item.id === id).title,
      artist: data.find((item) => item.id === id).artist,
      track: data.find((item) => item.id === id).track,
    });
  };
  const handleIconClick = (id) => {
    if (selectedImageId === id) {
      setShowIcons(!showIcons);
    } else {
      setSelectedImageId(id);
      setShowIcons(true);
    }
  };
  const handleMouseEnter = (id) => {
    if (selectedImageId !== id) {
      setSelectedImageId(null);
      setShowIcons(false);
    }
  };
  return (
    <section className="bg-section" style={{ backgroundImage: `url(${selectedImageUrl})` }}>
      <div className="grid items-center justify-center">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="z-0 p-3 rounded shadow-lg bg-gradient-to-b from-zinc-900 to-black"
              onMouseEnter={() => handleMouseEnter(item.id)}
            >
              <div className="relative overflow-hidden group">
                <img
                  className="block w-full transition-transform duration-300 transform scale-100 rounded md:w-72 group-hover:scale-110"
                  src={item.artwork}
                  alt=""
                />
                <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full transition bg-black bg-opacity-0 rounded group-hover:bg-opacity-60 group-hover:opacity-100">
                  <button
                    className="flex items-center justify-center mt-10 text-white transition transform translate-y-3 opacity-0 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
                    onClick={() => handlePlayClick(item.id, item.artwork)}
                  >
                    {playingId === item.id ? <PiPause size={50} /> : <PiPlay size={50} />}
                  </button>
                  <br />
                  <button
                    className="flex items-center justify-center text-white transition transform translate-y-3 opacity-0 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
                    onClick={() => handleIconClick(item.id)}
                  >
                    <BiDotsHorizontal size={20} />
                  </button>
                  {selectedImageId === item.id && showIcons && (
                    <div className="flex justify-center mt-4 space-x-4">
                      <FaSpotify size={20} className="text-green-500" />
                      <FaSoundcloud size={20} className="text-orange-500" />
                      <SiBeatport size={20} className="text-green-500" />
                    </div>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg text-white">{item.title}</h3>
                <p className="text-gray-400">{item.artist}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default List;
