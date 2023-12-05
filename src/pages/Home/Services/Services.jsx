import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-orange-500">Services</h3>
      <h2 className="text-5xl mb-2">Our Service area</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sapiente
        harum iste amet unde deserunt, accusamus.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
