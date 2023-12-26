import React, { useState, useEffect } from 'react';
import StarRating from 'react-star-rating-component';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comment() {

  return (
    <div>
            <section className="py-10 bg-white selection:font-poppins dark:bg-gray-800">
  <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
    <div className="lg:grid-cols-[40%,1fr] grid grid-cols-1 gap-6">
      <div>
        <div className="p-6 bg-white rounded-md dark:bg-gray-900">
          <h2 className="mb-6 text-3xl font-black text-center dark:text-gray-400">
            Customer Reviews
          </h2>
          <div className="mb-4 text-center">
            <span className="inline-block text-5xl font-bold text-emerald-500 dark:text-gray-300">
              4.9
            </span>
            <span className="inline-block text-xl font-medium text-gray-700 dark:text-gray-400">
              /5
            </span>
          </div>
          <ul className="flex items-center justify-center mb-6">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-4 mr-1 text-emerald-500 dark:text-emerald-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <p className="mb-6 text-sm text-center dark:text-gray-400">
            Average Rating and percentage per views
          </p>
          <div>
            <div className="flex items-center mb-2">
              <div className="w-full h-4 mr-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-emerald-500 rounded-full dark:bg-emerald-400"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="text-base font-medium dark:text-gray-400">
                91%{" "}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-full h-4 mr-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-teal-500 rounded-full dark:bg-emerald-400"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-base font-medium d dark:text-gray-400">
                30%{" "}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-full h-4 mr-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-emerald-500 rounded-full dark:bg-emerald-400"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <div className="text-base font-medium dark:text-gray-400">
                10%{" "}
              </div>
            </div>
            <div className="flex items-center ">
              <div className="w-full h-4 mr-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-emerald-500 rounded-full dark:bg-emerald-400"
                  style={{ width: "14%" }}
                ></div>
              </div>
              <div className="text-base font-medium dark:text-gray-400">
                3%{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-md lg:p-6 dark:border-gray-900 dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-bold dark:text-gray-300">
            Quality is good 
          </h2>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Good playground
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center">
              <img
                className="object-cover w-10 h-10 mb-1 mr-2 rounded-full shadow lg:mb-0"
                src="https://media.licdn.com/dms/image/D4D03AQGc5hEVDZnwGg/profile-displayphoto-shrink_800_800/0/1691223899459?e=2147483647&v=beta&t=hntN0umvGE9P-Tf7Vb0uNxVbbwLo423kVw_f30T14sM "
              />
              <h2 className="mr-2 text-lg font-semibold text-gray-700 dark:text-gray-400">
                Nidal Raed{" "}
              </h2>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {" "}
                12, SEP 2023{" "}
              </p>
            </div>

          </div>
        </div>

        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-md lg:p-6 dark:border-gray-900 dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-bold dark:text-gray-300">
            This is one of the best product.
          </h2>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center">
              <img
                className="object-cover w-10 h-10 mb-1 mr-2 rounded-full shadow lg:mb-0"
                src="https://i.postimg.cc/rF6G0Dh9/pexels-emmy-e-2381069.jpg "
              />
              <h2 className="mr-2 text-lg font-semibold text-gray-700 dark:text-gray-400">
                Rinkya Tansen{" "}
              </h2>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {" "}
                12, SEP 2022{" "}
              </p>
            </div>
            <div className="flex items-center">

            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-md dark:bg-gray-900">
          <h2 className="mb-6 text-2xl font-black text-left dark:text-gray-400">
            Write a Review
          </h2>
          <form action="" className="">


            <div className="px-2 mb-6">
              <label
                htmlFor="firstname"
                className="block mb-2 font-bold text-gray-700  dark:text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required=""
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
              />
            </div>
            <div className="px-2 mb-6">
              <label
                htmlFor="firstname"
                className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400"
              >
                Review
              </label>
              <textarea
                type="message"
                placeholder="write a review"
                required=""
                className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                defaultValue={""}
              />
            </div>
            <div className="px-2">
              <button className="px-4 py-2 font-medium text-gray-100 bg-emerald-500 rounded shadow hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-700">
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Comment;
