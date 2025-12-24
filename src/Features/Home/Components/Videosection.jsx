import { useEffect, useState } from "react";
import AOS from "aos";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "aos/dist/aos.css";

// 🔹 THUMBNAILS
import thumbnail1 from "../../../assets/Images/Thumbnail1.webp";
import thumbnail2 from "../../../assets/Images/Thumbnail2.webp";
import thumbnail3 from "../../../assets/Images/Thumbnail3.webp";

export default function VideoCarousel() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const slides = [
    {
      id: 1,
      videoId: "efQ3ao-UUt8",
      title: "How Deep Are Oil Rigs?",
      thumbnail: thumbnail1,
    },
    {
      id: 2,
      videoId: "rTgGqucHAsI",
      title: "Crude Oil Extraction",
      thumbnail: thumbnail2,
    },
    {
      id: 3,
      videoId: "xCxnFCM-Ji0",
      title:
        "Great Waters UAE – Offshore Oil & Gas Installation Engineering and PMC",
      thumbnail: thumbnail3,
    },
  ];

  const extendedSlides = [...slides, ...slides, ...slides];
  const baseLength = slides.length;

  const [index, setIndex] = useState(baseLength);
  const [animate, setAnimate] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  const SLIDE_WIDTH = 420;

  const next = () => {
    setAnimate(true);
    setActiveVideo(null);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setAnimate(true);
    setActiveVideo(null);
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    if (index === baseLength * 2) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(baseLength);
      }, 700);
    }

    if (index === baseLength - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(baseLength * 2 - 1);
      }, 700);
    }
  }, [index, baseLength]);

  return (
    <section data-aos="fade-up" className="w-full bg-white py-16 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className={`flex items-center ${
              animate ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(calc(50% - ${
                index * SLIDE_WIDTH + SLIDE_WIDTH / 2
              }px))`,
            }}
          >
            {extendedSlides.map((slide, i) => {
              const isCenter = i === index;

              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-6"
                  style={{ width: SLIDE_WIDTH }}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl
                      transition-all duration-700
                      ${isCenter ? "scale-110" : "scale-95 opacity-70"}
                    `}
                  >
                    {/* VIDEO / THUMBNAIL */}
                    <div className="relative w-full aspect-video bg-black ">
                      {activeVideo === i ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1`}
                          title={slide.title}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          {/* THUMBNAIL */}
                          <img
                            src={slide.thumbnail}
                            alt={slide.title}
                            className="w-full h-full  object-cover"
                          />

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-black/30" />

                          {/* PLAY BUTTON */}
                          <button
                            onClick={() => setActiveVideo(i)}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-white ml-1"
                              >
                                <path fill="currentColor" d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>
                        </>
                      )}
                    </div>

                    {/* TITLE */}
                    <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg">
                      <h3 className="text-white font-semibold text-sm">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-8 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
