"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/constants";
import ServiceList from "./ServiceList";
import ServiceOrbit from "./ServiceOrbit";
import ServiceOrbitMQ from "./SeriviceOrbitMQ";
import './ServiceSection.css' 

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-16  min-h-[800px]"  id="product-container">
      <div className="container mx-auto px-3  lg:px-6 relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12" id="product-sec">
        
        {/* LEFT COLUMN: Text & List */}
        <section className="hidden md:hidden lg:hidden xl:block">
        <ServiceList 
          products={PRODUCTS} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex} 
        />
        </section>

        {/* RIGHT COLUMN: Orbit Animation */}
        <ServiceOrbit 
          products={PRODUCTS} 
          activeIndex={activeIndex} 
        /> 
<section className=" xl:hidden lg:block md:block block">
<ServiceOrbitMQ ></ServiceOrbitMQ>
</section>
        
        
        
      </div>
    </section>
    
  );
};

export default ServiceSection;
