  import Image from "next/image";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10  gap-10 bg-gray-200">
      
      {/* Image */}
      <div className="flex-1 ">
        <Image 
          src="/assets/images/image-rf-core.png"
          alt="RF image"
          width={940}
          height={640}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h6 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black-500 leading-tight " >
          We Are RFcore
        </h6>

        <h1 className=" lg:text-lg text-gray-600 font-medium tracking-wide mt-4 md:text-sm text-[16px]">
          We design and manufacture MMICs, HPAs, and customized RF systems.
        </h1>

        <button className="mt-8 bg-gradient-to-bl from-[#66E1F7] via-[#64C7E9] to-[#0FB9BC] text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default Section;
