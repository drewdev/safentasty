const Banner = () => {
  return (
    <div className="relative w-full bg-cover bg-center mt-16" style={{ backgroundImage: 'url(./happy-lunch.jpg)' }}>
      <div className="inset-0 bg-black bg-opacity-50 flex justify-center items-center h-40">
        <h2 className="text-lg md:text-3xl font-bold text-white text-center px-4">
          We know how hard it is to find food that meets your needs, leave it to us and enjoy the food you love 🥰!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
