import Image from "next/image";
import { ServiceItem } from "@/types";

interface ServiceOrbitProps {
  products: ServiceItem[];
  activeIndex: number;
}

const ServiceOrbit = ({ products, activeIndex }: ServiceOrbitProps) => {
  const rotationAngle = activeIndex * 90;

  return (
    <div className="hidden xl:block relative h-[800px] -right-2/3">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gray-100 rounded-full z-0" />
      <div 
        className="absolute top-1/2 left-0 w-[800px] h-[800px] rounded-full border border-blue-900/30 transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translate(0%, -50%) rotate(${rotationAngle}deg)`,
          transformOrigin: 'center'
        }}
      >
        {products.map((item, index) => {
          const styles = {
            0: { top: '50%', left: '0', transform: 'translate(-50%, -50%)' }, // Left
            1: { top: '0', left: '50%', transform: 'translate(-50%, -50%)' }, // Top
            2: { top: '50%', right: '0', transform: 'translate(50%, -50%)' }, // Right
            3: { bottom: '0', left: '50%', transform: 'translate(-50%, 50%)' } // Bottom
          }[index];

          return (
            <div
              key={item.id}
              className="absolute flex items-center justify-center w-[200px] h-[200px]"
              style={styles}
            >
               <div 
                 className="relative w-full h-full transition-transform duration-1000 ease-in-out drop-shadow-xl"
                 style={{
                   transform: `rotate(${-rotationAngle}deg)`
                 }}
               >
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceOrbit;