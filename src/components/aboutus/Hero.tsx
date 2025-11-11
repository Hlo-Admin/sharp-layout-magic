// src/components/Hero.tsx
import Navbar from "@/components/common/Navigation";

const Hero = ({ data }) => {
  const { breadcrumbs, title, subtitle, contactIcons, image } = data;

  return (
    <section className="relative h-[340px] mx-3 my-6 px-0 rounded-xl">
      {/* Banner background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(1)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center pt-5 mt-16 px-4">
        <h1 className="text-white text-4xl md:text-9xl font-bold  mb-2 drop-shadow">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
