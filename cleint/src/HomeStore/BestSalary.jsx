import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';  // استيراد useNavigate

function BestSalary({ onAddToCart, onAddToWishlist }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3010/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data');
      });
  }, []);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    toast.success('Product added to cart!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // بمجرد إضافة المنتج إلى العربة، قم بتوجيه المستخدم إلى صفحة العربة
  };

  const handleAddToWishlist = (product) => {
    onAddToWishlist(product);
    setHeartCount(heartCount + 1);
    toast.success('Product added to wishlist!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  return (
    <div>
      {error && <div>Error: {error}</div>}
      <section className="flex items-center py-20 bg-white lg:h-screen dark:bg-gray-800 ">
        <div className="px-4 mx-auto max-w-7xl mt-12">
          <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product, index) => (
              <div key={index} className="relative overflow-hidden bg-white shadow rounded-xl dark:bg-gray-700 mt-12">
                <div className="relative overflow-hidden ">
                  <div className="mb-5 overflow-hidden">
                    <img
                      className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleAddToWishlist(product);
                    }}
                    className="absolute top-0 left-0 p-3 bg-emerald-500 rounded-l-none hover:bg-emerald-600 rounded-t-xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="px-5 mb-4 text-lg font-bold dark:text-white">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex">
                  <div className="w-1/2 px-5 pb-3">
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-300">
                      ${product.price}
                    </p>
                    <span className="block -mt-1 text-xs font-semibold text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 text-sm text-white transition-all bg-emerald-600 rounded-r-none hover:bg-teal-600 rounded-t-xl"
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default BestSalary;
