
//عرض جميع الملاعب 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cardsground() {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [filteredPlaygrounds, setFilteredPlaygrounds] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    location: '',
    rating: '',
    size: '',
  });
  const [location, setLocations] = useState([]);
  const [fieldSizes, setFieldSizes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2000/stadiums')
      .then((response) => {
        setPlaygrounds(response.data);
        setFilteredPlaygrounds(response.data);
        const uniqueLocations = [...new Set(response.data.map(playground => playground.location))];
        const uniqueFieldSizes = [...new Set(response.data.map(playground => playground.size))];
        setLocations(uniqueLocations);
        setFieldSizes(uniqueFieldSizes);
      })
      .catch((error) => {
        console.error('Error fetching playgrounds:', error);
      });
  }, []);

  useEffect(() => {
    filterPlaygrounds();
  }, [filterCriteria]);

  const filterPlaygrounds = () => {
    let filtered = [...playgrounds];

    if (filterCriteria.location) {
      filtered = filtered.filter(playground =>
        playground.location.toLowerCase().includes(filterCriteria.location.toLowerCase())
      );
    }

    if (filterCriteria.rating) {
      filtered = filtered.sort((a, b) => {
        if (filterCriteria.rating === 'lowToHigh') {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      });
    }

    if (filterCriteria.size) {
      filtered = filtered.filter(playground =>
        playground.size === filterCriteria.size
      );
    }

    setFilteredPlaygrounds(filtered);
  };

  const handleLocationChange = (e) => {
    setFilterCriteria({ ...filterCriteria, location: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilterCriteria({ ...filterCriteria, rating: e.target.value });
  };

  const handleFieldSizeChange = (e) => {
    setFilterCriteria({ ...filterCriteria, size: e.target.value });
  };

  return (
    <div className="min-h-[50vh] bg-white py-6 flex flex-col justify-center sm:py-2 mb-[-20 ] " id='y'>
      <div className="py-3 sm:max-w-8xl sm:mx-auto ">
        <div className="relative inline-flex mb-10">
          <select
            value={filterCriteria.location}
            onChange={handleLocationChange}
            className="inline-flex items-center justify-center  h-10 gap-8 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <option value="">All Locations</option>
            {location.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="relative inline-flex mb-4 ml-8" style={{ backgroundColor: 'gray' }}>
          <select
            value={filterCriteria.rating}
            onChange={handleRatingChange}
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <option value="">All Ratings</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        <div className="relative inline-flex mb-4 ml-8">
          <select
            value={filterCriteria.size}
            onChange={handleFieldSizeChange}
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <option value="">All Sizes</option>
            {fieldSizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center space-x-6">
          {filteredPlaygrounds.map((playground, index) => (
            <div key={playground.id} className="mb-6 w-1/4">
              <div className="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-2xl p-8 flex space-x-20">
                <div className="h-48 overflow-visible w-10/12">
                <img className="rounded-3xl shadow-lg" src={playground.images_url && playground.images_url.length > 0 ? playground.images_url[0] : 'عنوان_الصورة_الافتراضي'} alt={playground.name} />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{playground.name}</h2>
                    <div className="bg-yellow-400 font-bold rounded-xl p-2">{playground.rating}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location: {playground.location}</div>
                    <div className="text-sm text-gray-400">Size of Field: {playground.size}</div>
                  </div>
                  <p className="text-gray-400 max-h-40 overflow-y-hidden">{playground.description}</p>
                  <div className="flex text-2xl font-bold text-a">{`${playground.hourly_rate} JOD`}</div>
                  <Link to={`/details/${playground.stadium_id}`}>
                    <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>More Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardsground;


