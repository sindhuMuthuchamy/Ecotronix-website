  import Image from "next/image";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-30 py-20 gap-10 bg-white">
      
      {/* Image */}
      <div className="flex-1">
        <Image 
          src="/assets/images/image-rf-core.png"
          alt="RF image"
          width={9000}
          height={6000}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h6 className="text-4xl md:text-5xl font-extrabold text-black-500 leading-tight mt-3" >
          We Are RFcore
        </h6>

        <h1 className=" text-lg text-gray-600 font-medium tracking-wide">
          We design and manufacture MMICs, HPAs, and customized RF systems.
        </h1>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default Section;
