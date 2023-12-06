import React from 'react'

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
            <div className="flex items-center">
              <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                  </svg>
                </a>
                <span>12</span>
              </div>
              <div className="flex text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                  </svg>
                </a>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 mb-6 bg-white border border-gray-200 rounded-md lg:p-6 dark:border-gray-900 dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-bold dark:text-gray-300">
            I like the quality of the product.
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
              <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                  </svg>
                </a>
                <span>12</span>
              </div>
              <div className="flex text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                  </svg>
                </a>
                <span>8</span>
              </div>
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
              <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-hand-thumbs-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                  </svg>
                </a>
                <span>12</span>
              </div>
              <div className="flex text-sm text-gray-700 dark:text-gray-400">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-emerald-400 bi bi-chat"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                  </svg>
                </a>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-md dark:bg-gray-900">
          <h2 className="mb-6 text-2xl font-black text-left dark:text-gray-400">
            Write a Review
          </h2>
          <form action="" className="">
            <div className="flex flex-wrap ">
              <div className="w-full px-2 mb-6 md:w-1/2">
                <label
                  htmlFor="firstname"
                  className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  required=""
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                />
              </div>
              <div className="w-full px-2 mb-6 md:w-1/2">
                <label
                  htmlFor="firstname"
                  className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  required=""
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                />
              </div>
            </div>
            <div className="px-2 mb-6">
              <label
                htmlFor="firstname"
                className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
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
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Comment
