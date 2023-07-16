import { useState, useEffect } from "react";
import { sanity, urlFor } from "../services/sanity";
import { PortableText } from "@portabletext/react";

export default function PortalComponent() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    sanity.fetch('*[_type == "product"]').then(setProducts).catch(console.log);
  }, []);

  return (
    <main className="py-2 px-4">
      <p className="text-2xl m-2 text-center">Available Products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4">
        {products?.map((product, index) => (
          <div className="shadow-md cursor-pointer hover:shadow-xl bg-white">
            <img
              src={urlFor(product.images[0])}
              alt={product?.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-2">
              <p className="font-bold" key={index}>
                {product?.name}
              </p>
              <p className="text-xl" key={index}>
                E{product?.price}
              </p>
            </div>

            <dialog></dialog>
          </div>
        ))}
      </div>
    </main>
  );
}
