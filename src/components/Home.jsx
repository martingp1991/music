import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";
import { PiPlay, PiPause } from "react-icons/pi";

const Home = ({
  selectedImageUrl,
  onPlayButtonClick,
  latestImages,
  activeIndex,
  isPlaying,
  playingId,
  handleSlideChange,
}) => {
  return (
    <section
      className="flex items-center justify-center h-screen bg-hero"
      style={{ backgroundImage: `url(${selectedImageUrl})` }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 bg-blur"
          style={{ backdropFilter: "blur(8px)" }}
        ></div>
        <div className="flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="mySwiper"
              onSlideChange={handleSlideChange}
            >
              {latestImages.map((image, index) => (
                <SwiperSlide key={image.id}>
                  <div className="relative">
                    <img src={image.artwork} alt={`Image ${image.id}`} />
                    {index === activeIndex && (
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <button
                          className="text-zinc-200"
                          onClick={() => onPlayButtonClick(image)}
                        >
                          {playingId === image.id && isPlaying ? (
                            <PiPause size={80} />
                          ) : (
                            <PiPlay size={80} />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h2 className="mt-2 font-extrabold text-white">
                      {image.title}
                    </h2>
                    <p className="font-extrabold text-white">{image.artist}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
