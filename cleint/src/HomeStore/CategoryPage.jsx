import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryPage() {
  const { categorySlug } = useParams();
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3010/Catalogs');
        const catalogs = response.data;

        const categoryCatalog = catalogs.find(
          (catalog) => catalog.name.toLowerCase().replace(/\s+/g, '-') === categorySlug
        );

        setCatalog(categoryCatalog);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categorySlug]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (!catalog) {
    return <div className="text-center mt-8">Category not found</div>;
  }

  return (
    <div className="container mx-auto mt-32">
      <h1 className="text-4xl font-bold mb-6">{catalog.name}</h1>
      <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {catalog.products.map((product) => (
          <div key={product.id} className="mt-56 bg-white rounded shadow dark:bg-gray-700 border border-green-500">
            <div className="relative z-20 p-6 group">
              <div className="relative block h-64 mb-4 -mt-56 overflow-hidden rounded -top-full">
                <img
                  className="object-cover w-full h-full transition-all group-hover:scale-110"
                  src={product.image}
                  alt={product.title}
                />
                <div className="absolute flex flex-col top-4 right-4">
                  <a href="#" className="flex items-center">
                    <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-teal-200 dark:hover:bg-teal-600 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="flex items-center">
                    <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded dark:bg-gray-700 dark:text-white group-hover:translate-x-0 wishlist hover:bg-teal-200 dark:hover:bg-teal-600 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-cart2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <a href="#">
                <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {product.title}
                </h2>
              </a>
              <p className="mb-3 text-lg font-bold text-teal-500 dark:text-teal-300">
                <span>${product.price}</span>
                <span className="text-xs font-semibold text-gray-400 line-through">
                  ${product.discountedPrice}
                </span>
              </p>
              <div className="flex gap-1 text-orange-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className={`bi bi-star${star <= product.rating ? '-fill' : ''}`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
