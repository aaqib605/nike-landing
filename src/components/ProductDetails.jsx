/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { products } from "../constants";
import Button from "./Button";
import { heart } from "../assets/icons";
import Nav from "./Nav";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <section className="padding flex justify-between flex-col gap-6 lg:flex-row max-container">
      <div className="flex justify-center flex-1">
        <img
          src={product.imgURL}
          alt="Shoe"
          className="w-[550px] max-lg:w-[650px]"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <span className="text-coral-red font-semibold">
          Sustainable Materials
        </span>
        <span className="text-2xl my-1">{product.name}</span>
        <span>Men&apos;s Shoes</span>
        <span className="mt-5 font-semibold">Price: {product.price}</span>
        <span className=" text-slate-500">incl. of taxes</span>
        <span className=" text-slate-500">
          (Also includes all applicable duties)
        </span>
        <div className="mt-5 lg:mt-10">
          <p>Select Size</p>
          <div className="grid grid-cols-3 gap-3">
            {product.sizes.map((size, index) => (
              <button
                className="border border-slate-300 rounded-md py-3 hover:border-black"
                key={index}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Button label="Add to Bag" fullWidth />
        </div>
        <div className="mt-3">
          <Button
            label="Favourite"
            iconURL={heart}
            backgroundColor="bg-white"
            fullWidth
          />
        </div>
        <p className="mt-10">{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
