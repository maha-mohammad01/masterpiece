import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Sale',
    path: '/category/sportswear',
    imageSrc: 'https://cdn.salla.sa/form-builder/2WlrkG2EnsGFeGAFtrCcbdIp20KauN5r8oKlL15G.png',
  },
  {
    id: 1,
    name: 'Sports supplies',
    path: '/category/sports-supplies',
    imageSrc: 'https://cdn.salla.sa/form-builder/GMYLTyssiC1bn4NWnvdaY3METmZyrmudm0H0ELOG.png',
  },
  {
    id: 2,
    name: 'Football shoes',
    path: '/category/football-shoes',
    imageSrc: 'https://cdn.salla.sa/form-builder/ChwRBYVfd4LbMmr9KWPDHNK0RCspPqCTnufAAmJX.png',
  },
  {
    id: 3,
    name: 'Player category',
    path: '/category/player-category',
    imageSrc: 'https://cdn.salla.sa/form-builder/HOiCFroVP1ICK6zbw38HvTLUWT8DW25v6xlycqN5.png',
  },
  {
    id: 5,
    name: 'Player category',
    path: '/category/player-category',
    imageSrc: 'https://cdn.salla.sa/form-builder/HOiCFroVP1ICK6zbw38HvTLUWT8DW25v6xlycqN5.png',
  },
  {
    id: 4,
    name: 'Sportswear',
    path: '/category/sportswear',
    imageSrc: 'https://cdn.salla.sa/form-builder/cpjNNr6g821p82hdKqQl566I9xjX8iomQjbRI3yh.png',
  },
  // ... add more categories as needed
];


    function Category() {
      return (
        <div className="mt-16 flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16">
          {categories.map((category) => (
            <div key={category.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-8">
              <Link to={category.path}>
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-full h-40 object-cover"
                />
                <h2 className="text-center text-xl font-semibold mt-2 text-emerald-500">
                  {category.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      );
    }
    
    export default Category;