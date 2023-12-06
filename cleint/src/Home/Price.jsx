// Price.js
import React from 'react';
import { Link } from 'react-router-dom';

function Price() {
  return (
    <div className="flex space-x-4 mt-32">
      {/* First Price Component */}
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
        <div className="flex flex-col">
          <header className="flex flex-col gap-6 p-6 text-slate-400">
            <h3 className="text-xl font-bold text-slate-700">
              Pro
              <span className="block text-sm font-normal text-slate-400">
                add many features
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                40
              </span>
              <span className="text-sm">/month</span>
            </h4>
            <Link to='/paymentform'>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
              <span>Swipe  into convenience</span>
            </button></Link>
          </header>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Fully featured headless CMS, now including GraphQL
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Language and framework agnostic
              </li>
            </ul>
          </div>
          <footer className="p-6 text-sm text-center border-t border-slate-200 bg-slate-100">
            <a
              className="transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-700"
              href="#"
            >
              See all features
            </a>
          </footer>
        </div>
      </div>

      {/* Second Price Component */}
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
        <div className="flex flex-col">
          <header className="flex flex-col gap-6 p-6 text-slate-400">
            <h3 className="text-xl font-bold text-slate-700">
              Basic
              <span className="block text-sm font-normal text-slate-400">
                Ideal for individual developers.
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                15
              </span>
              <span className="text-sm">/month</span>
            </h4>
            <Link to='/paymentform'>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
              <span>Swipe  into convenience</span>
            </button></Link>
          </header>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Fully featured headless CMS, now including GraphQL
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Language and framework agnostic
              </li>
            </ul>
          </div>
          <footer className="p-6 text-sm text-center border-t border-slate-200 bg-slate-100">
            <a
              className="transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-700"
              href="#"
            >
              See all features
            </a>
          </footer>
        </div>
      </div>
      </div>

      {/* Third Price Component */}
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 lg:max-md-full">
        <div className="flex flex-col">
          <header className="flex flex-col gap-6 p-6 text-slate-400">
            <h3 className="text-xl font-bold text-slate-700">
              Basic
              <span className="block text-sm font-normal text-slate-400">
                Ideal for individual developers.
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                15
              </span>
              <span className="text-sm">/month</span>
            </h4>
            <Link to='/paymentform'>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-100 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-100 focus-visible:outline-none">
              <span>Swipe  into convenience</span>
            </button></Link>
          </header>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Fully featured headless CMS, now including GraphQL
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 p-1 shrink-0 text-emerald-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                Language and framework agnostic
              </li>
            </ul>
          </div>
          <footer className="p-6 text-sm text-center border-t border-slate-200 bg-slate-100">
            <a
              className="transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-700"
              href="#"
            >
              See all features
            </a>
          </footer>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Price;
