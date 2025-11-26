import { FiArrowUpRight } from "react-icons/fi";
import { ServiceItem } from "@/types";

interface ServiceListProps {
  products: ServiceItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ServiceList = ({ products, activeIndex, setActiveIndex }: ServiceListProps) => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-3xl lg:text-6xl font-bold text-gray-900">
        Products & Services
      </h3>
      <p className="mt-6 text-lg lg:text-xl text-gray-500">
        We provide high-quality RF Solutions.
      </p>

      <div className="mt-12 flex flex-col" role="tablist">
        {products.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left cursor-pointer border-b border-gray-200 py-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-2 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span 
                    className={`mr-4 h-3 w-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`} 
                  />
                  <h4 className={`text-2xl lg:text-4xl font-semibold transition-colors duration-300 ${isActive ? 'text-blue-900' : 'text-gray-400'}`}>
                    {item.title}
                  </h4>
                </div>
                
                <FiArrowUpRight
                  className={`text-blue-600 h-6 w-6 transition-all duration-300 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                />
              </div>

              <div 
                id={`panel-${item.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${item.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
              >
                <p className="pl-7 text-gray-600 text-base lg:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
