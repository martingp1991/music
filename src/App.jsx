import { useState } from "react";
import Home from "./components/Home";
import List from "./components/List";
import Artist from "./components/Artist";
import Footer from "./components/Footer";
import Player from "./components/Player";
import { data } from "./data";

const App = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    "https://static.kvraudio.com/i/b/revealed_spire_arps_vol__2.jpg"
  );

  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [selectedImageInfo, setSelectedImageInfo] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingId, setPlayingId] = useState(null);
  const latestImages = data.slice(-5); // últimas 5 imágenes

  const handlePlayButtonClick = (image) => {
    setSelectedImageInfo(image);
    setIsPlayerOpen(true);
    setActiveIndex(latestImages.findIndex((img) => img.id === image.id));
    if (playingId === image.id) {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    } else {
      setIsPlaying(true);
      setPlayingId(image.id);
    }
    setSelectedImageUrl(image.artwork);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedImageInfo({});
    setActiveIndex(0);
    setIsPlaying(false);
    setPlayingId(null);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleBackward = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : data.length - 1;
    setActiveIndex(newIndex);
    setSelectedImageInfo(data[newIndex]);
  };

  const handleForward = () => {
    const newIndex = (activeIndex + 1) % data.length;
    setActiveIndex(newIndex);
    setSelectedImageInfo(data[newIndex]);
  };

  return (
    <div>
      <Home
        selectedImageUrl={selectedImageUrl}
        onPlayButtonClick={handlePlayButtonClick}
        latestImages={latestImages}
        activeIndex={activeIndex}
        isPlaying={isPlaying}
        playingId={playingId}
        handleSlideChange={handleSlideChange}
      />
      <List selectedImageUrl={selectedImageUrl} onPlayButtonClick={handlePlayButtonClick} />
      <Artist selectedImageUrl={selectedImageUrl} onPlayButtonClick={handlePlayButtonClick} />
      <Footer />
      {isPlayerOpen && (
        <Player
          onClosePlayer={handleClosePlayer}
          selectedImage={selectedImageInfo.artwork}
          selectedTitle={selectedImageInfo.title}
          selectedArtist={selectedImageInfo.artist}
          selectedTrack={selectedImageInfo.track}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onBackward={handleBackward}
          onForward={handleForward}
        />
      )}
    </div>
  );
};

export default App;
