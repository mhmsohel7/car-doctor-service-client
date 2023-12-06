import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6 mt-6">
      <figure className="px-10 pt-10">
        <img src={img} className="rounded-xl h-[250px]" />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="text-xl">
            Price : <span className="text-orange-500">${price}</span>
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="ms-40 mt-1 text-error">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
