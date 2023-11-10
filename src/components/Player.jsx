import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

const Player = ({
  onClosePlayer,
  selectedImage,
  selectedTitle,
  selectedArtist,
  onBackward,
  onForward,
  selectedTrack,
  isPlaying,
  setIsPlaying
}) => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const prevSelectedTrackRef = useRef(null);

  useEffect(() => {
    if (prevSelectedTrackRef.current !== selectedTrack) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      prevSelectedTrackRef.current = selectedTrack;
      setIsPlaying(true);
      setProgress(0);
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [selectedTrack, isPlaying, setIsPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleSkipBackward = () => {
    onBackward();
  };

  const handleSkipForward = () => {
    onForward();
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (!isNaN(duration)) {
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);

      if (currentTime === duration) {
        onForward();
      }
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-10 w-full bg-opacity-50 bg-zinc-900 backdrop-filter backdrop-blur-lg">
      <div className="flex mx-auto overflow-hidden rounded-lg shadow-md w-10/14">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center p-1 sm:flex-row">
            <div className="flex">
              <div className="flex items-center">
                <div className="flex p-2 space-x-3">
                  <button
                    className="focus:outline-none"
                    onClick={handleSkipBackward}
                  >
                    <IoIosSkipBackward className="w-4 h-4 text-[#d4d4d8] hover:text-zinc-400" />
                  </button>
                  <button
                    className="focus:outline-none"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <FaRegPauseCircle className="w-10 h-10 text-[#d4d4d8] hover:text-zinc-400" />
                    ) : (
                      <FaRegPlayCircle className="w-10 h-10 text-[#d4d4d8] hover:text-zinc-400" />
                    )}
                  </button>
                  <button
                    className="focus:outline-none"
                    onClick={handleSkipForward}
                  >
                    <IoIosSkipForward className="w-4 h-4 text-[#d4d4d8] hover:text-zinc-400" />
                  </button>
                </div>
              </div>
              <img
                className="object-cover w-20 h-20 ml-4"
                alt="User avatar"
                src={selectedImage}
              />
              <div className="flex flex-col w-full px-2">
                <span className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                  now playing
                </span>
                <span className="pt-1 text-sm font-semibold text-red-500 capitalize">
                  {selectedTitle}
                </span>
                <span className="text-xs font-medium text-gray-400 uppercase ">
                  &#34; - {selectedArtist} &#34;
                </span>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 focus:outline-none"
              onClick={onClosePlayer}
            >
              <AiOutlineClose
                size={14}
                className="text-white hover:text-zinc-400"
              />
            </button>
          </div>
          <div className="relative w-full h-1 cursor-pointer">
            <div className="w-full h-2 rounded-lg bg-zinc-300">
              <div
                className="absolute top-0 w-full h-2 rounded-lg bg-gradient-to-r from-red-700 to-red-900"
                style={{ width: `${progress}%`, transition: "width 0.3s ease" }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                step="0.01"
                value={progress}
                className="absolute top-0 w-full h-2 rounded-lg opacity-0 cursor-pointer"
                onChange={handleSeek}
              />
            </div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={selectedTrack}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Player;
