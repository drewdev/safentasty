import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: './happy-lunch.jpg',
    text: 'We know how hard it is to find food that meets your needs, leave it to us and enjoy the food you love 🥰!',
  },
  {
    image: './peacefull.png',
    text: 'Our top priority is to ensure your health and peace of mind, so you can simply enjoy without worries! 😌',
  },
  {
    image: './vegan-gluten-free.png',
    text: 'Delicious vegan and gluten-free dishes made just for you! Healthy and tasty options for a better lifestyle 🌱🥗',
  },
];

const Banner = () => {
  return (
    <div className="relative w-full mt-16 h-52">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={700}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="inset-0 bg-black bg-opacity-50 flex justify-center items-center h-full">
                <h2 className="text-lg md:text-3xl font-bold text-white text-center px-4">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
