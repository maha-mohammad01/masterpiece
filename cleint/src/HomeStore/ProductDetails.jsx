import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Placeholder data for demonstration
  const productDetails = {
    id: id,
    title: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    price: '$29.99',
    availability: 'In Stock',
    colors: ['gray', 'red', 'blue', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://cdn.salla.sa/wjRK/xcypAaB8XoSLIMqctvsg6K6fTFN213ZAhwg6wXZN.jpg',
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={productDetails.imageUrl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {productDetails.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {productDetails.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">{productDetails.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">{productDetails.availability}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2">
                {productDetails.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full bg-${color}-800 dark:bg-${color}-200 mr-2`}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                {productDetails.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {productDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
