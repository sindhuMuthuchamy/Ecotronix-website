"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/constants";
import ServiceList from "./ServiceList";
import ServiceOrbit from "./ServiceOrbit";

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32 min-h-[800px]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: Text & List */}
        <ServiceList 
          products={PRODUCTS} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex} 
        />

        {/* RIGHT COLUMN: Orbit Animation */}
        <ServiceOrbit 
          products={PRODUCTS} 
          activeIndex={activeIndex} 
        />
      </div>
    </section>
    
  );
};

export default ServiceSection;
