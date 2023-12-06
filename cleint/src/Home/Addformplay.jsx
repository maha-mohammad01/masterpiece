// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const AddFormPlay = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     location: '',
//     size: '',
//     hourly_rate: '',
//     description: '',
//     phone: '',
//     start_time: '',
//     end_time: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     console.log(formData);
//   };

//   // const handleImageChange = (e) => {
//   //   const selectedImages = Array.from(e.target.files);
//   //   setFormData({
//   //     ...formData,
//   //     images: selectedImages,
//   //   });
//   // };

//   const handleSubmit = async (e) => {
    
//     e.preventDefault();

//     const token = fetchUserData();

//     if (!token) {
//       toast.error('User not authenticated. Please log in.', { /* ... */ });
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'images') {
//         value.forEach((image, index) => {
//           formDataToSend.append(`image${index + 1}`, image);
//         });
//       } else {
//         formDataToSend.append(key, value);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:2000/add-stadium', formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
      

//       console.log(formDataToSend);

//       if (response.status === 201) {
//         toast.success('Stadium added successfully!', { /* ... */ });
//         navigate('/price');
//       } else {
//         console.error('Stadium addition failed with status:', response.status);
//         toast.error('Stadium addition failed. Please try again.', { /* ... */ });
//       }
//     } catch (error) {
//       console.error('Error during stadium addition:', error);
//       console.error('Axios Error Details:', error.response);
//       toast.error('Error during stadium addition. Please try again.', { /* ... */ });
//     }
//   };

//   const fetchUserData = () => {
//     let token = Cookies.get('authToken') || localStorage.getItem('isLoggedIn');

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return null;
//     }

//     return token;
//   };
//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
//         <form onSubmit={handleSubmit}>
//           <h1 className="font-bold mt-5 text-2xl">Welcome to Add Playground Form</h1>
//           <div className="mb-5 mt-7">
//             <label
//               htmlFor="fullName"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="fullName"
//               placeholder="Full Name"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>


//           <div className="mb-5">
//             <label
//               htmlFor="phone"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>





//           <div className="mb-5">
//             <label
//               htmlFor="location"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               id="location"
//               placeholder="Location"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>







//           <div className="mb-5">
//             <label
//               htmlFor="city"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               id="city"
//               placeholder="City"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>





//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="price"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   name="hourly_rate"
//                   id="price"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>






//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="size"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Size
//                 </label>
//                 <input
//                   type="size"
//                   name="size"
//                   id="size"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>


          
//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="startTime"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Start Time
//                 </label>
//                 <input
//                   type="time"
//                   name="start_time"
//                   id="startTime"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="endTime"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   End Time
//                 </label>
//                 <input
//                   type="time"
//                   name="end_time"
//                   id="endTime"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="notice"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="notice"
//               placeholder="Any additional notes or requests?"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           {/* Image Upload Section */}
//           {/* <div className="mb-5">
//             <label htmlFor="images" className="mb-3 block text-base font-medium text-[#07074D]">
//               Upload Images
//             </label>
//             <input
//               type="file"
//               name="images_url"
//               id="images"
//               accept="image/*"
//               multiple
//               onChange={handleImageChange}
//             />
//           </div> */}
//           {/* Uncomment the Link tag if you want to use it */}
//           {/* <Link to="/price"> */}
//           <button
//             type="submit"
//             className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
//           >
//             Next Step
//           </button>
//           {/* </Link> */}
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddFormPlay;














// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const AddFormPlay = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     location: '',
//     size: '',
//     hourly_rate: '',
//     description: '',
//     phone: '',
//     start_time: '',
//     end_time: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = fetchUserData();

//     if (!token) {
//       toast.error('User not authenticated. Please log in.', { /* ... */ });
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:2000/add-stadium', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 201) {
//         toast.success('Stadium added successfully!', { /* ... */ });
//         navigate('/price');
//       } else {
//         console.error('Stadium addition failed with status:', response.status);
//         toast.error('Stadium addition failed. Please try again.', { /* ... */ });
//       }
//     } catch (error) {
//       console.error('Error during stadium addition:', error);
//       console.error('Axios Error Details:', error.response);
//       toast.error('Error during stadium addition. Please try again.', { /* ... */ });
//     }
//   };

//   const fetchUserData = () => {
//     let token = Cookies.get('authToken') || localStorage.getItem('isLoggedIn');

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return null;
//     }

//     return token;
//   };

//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
//         <form onSubmit={handleSubmit}>
//           <h1 className="font-bold mt-5 text-2xl">Welcome to Add Playground Form</h1>
//           <div className="mb-5 mt-7">
//             <label
//               htmlFor="fullName"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="fullName"
//               placeholder="Full Name"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label
//               htmlFor="phone"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label
//               htmlFor="location"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               id="location"
//               placeholder="Location"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label
//               htmlFor="city"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               id="city"
//               placeholder="City"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="price"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   name="hourly_rate"
//                   id="price"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="size"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Size
//                 </label>
//                 <input
//                   type="size"
//                   name="size"
//                   id="size"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="startTime"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   Start Time
//                 </label>
//                 <input
//                   type="time"
//                   name="start_time"
//                   id="startTime"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label
//                   htmlFor="endTime"
//                   className="mb-3 block text-base font-medium text-[#07074D]"
//                 >
//                   End Time
//                 </label>
//                 <input
//                   type="time"
//                   name="end_time"
//                   id="endTime"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-5">
//             <label
//               htmlFor="notice"
//               className="mb-3 block text-base font-medium text-[#07074D]"
//             >
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="notice"
//               placeholder="Any additional notes or requests?"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
//           >
//             Next Step
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddFormPlay;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const AddFormPlay = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     location: '',
//     size: '',
//     hourly_rate: '',
//     description: '',
//     phone: '',
//     start_time: '',
//     end_time: '',
//     images_url: [],  // Use an array to store multiple image files
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = fetchUserData();
  
//     if (!token) {
//       toast.error('User not authenticated. Please log in.', {});
//       return;
//     }
  
//     const formDataToSend = new FormData();
  
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'images_url') {
//         // If it's an array of images, append each one with a unique key
//         value.forEach((image, index) => {
//           formDataToSend.append(`images_url${index}`, image);
//         });
//       } else {
//         formDataToSend.append(key, value);
//       }
//     });
  
//     try {
//       const response = await axios.post('http://localhost:2000/add-stadium', formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//   // ...

// Object.entries(formData).forEach(([key, value]) => {
//   if (key === 'images_url') {
//     // If it's an array of images, append them directly without indices
//     value.forEach((image) => {
//       formDataToSend.append('images_url', image);
//     });
//   } else {
//     formDataToSend.append(key, value);
//   }
// });



//       if (response.status === 201) {
//         toast.success('Stadium added successfully!', {});
//         navigate('/price');
//       } else {
//         console.error('Stadium addition failed with status:', response.status);
//         toast.error('Stadium addition failed. Please try again.', {});
//       }
//     } catch (error) {
//       console.error('Error during stadium addition:', error);
//       console.error('Axios Error Details:', error.response);
//       toast.error('Error during stadium addition. Please try again.', {});
//     }
//   };
  
//   const handleChange = (e) => {
//     if (e.target.name === 'images_url') {
//       const files = e.target.files;
//       const imagesArray = Array.from(files); // Convert FileList to array
//       setFormData({
//         ...formData,
//         images_url: imagesArray,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const fetchUserData = () => {
//     let token = Cookies.get('authToken') || localStorage.getItem('isLoggedIn');

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return null;
//     }

//     return token;
//   };

//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
//         <form onSubmit={handleSubmit}>
//           <h1 className="font-bold mt-5 text-2xl">Welcome to Add Playground Form</h1>

//           <div className="mb-5 mt-7">
//             <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Full Name"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="location" className="mb-3 block text-base font-medium text-[#07074D]">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               id="location"
//               placeholder="Location"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               id="city"
//               placeholder="City"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="hourly_rate" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   name="hourly_rate"
//                   id="hourly_rate"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="size" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Size
//                 </label>
//                 <input
//                   type="text"
//                   name="size"
//                   id="size"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="start_time" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Start Time
//                 </label>
//                 <input
//                   type="time"
//                   name="start_time"
//                   id="start_time"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="end_time" className="mb-3 block text-base font-medium text-[#07074D]">
//                   End Time
//                 </label>
//                 <input
//                   type="time"
//                   name="end_time"
//                   id="end_time"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-5">
//             <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="description"
//               placeholder="Any additional notes or requests?"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="mb-5">
//             <label htmlFor="images_url" className="mb-3 block text-base font-medium text-[#07074D]">
//               Upload Images
//             </label>
//             <input
//               type="file"
//               name="images_url"
//               id="images_url"
//               accept="image/*"
//               multiple
//               onChange={handleChange}
//             />
//           </div>

//           <button
//             type="submit"
//             className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
//           >
//             Next Step
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddFormPlay;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// const AddFormPlay = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     location: '',
//     size: '',
//     hourly_rate: '',
//     description: '',
//     phone: '',
//     start_time: '',
//     end_time: '',
//     images_url: [],  // Use an array to store multiple image files
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = fetchUserData();

//     if (!token) {
//       toast.error('User not authenticated. Please log in.', {});
//       return;
//     }

//     const formDataToSend = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === 'images_url') {
//         // If it's an array of images, append them directly without indices
//         value.forEach((image) => {
//           formDataToSend.append('images_url', image);
//         });
//       } else {
//         formDataToSend.append(key, value);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:2000/add-stadium', formDataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 201) {
//         toast.success('Stadium added successfully!', {});
//         navigate('/price');
//       } else {
//         console.error('Stadium addition failed with status:', response.status);
//         toast.error('Stadium addition failed. Please try again.', {});
//       }
//     } catch (error) {
//       console.error('Error during stadium addition:', error);
//       console.error('Axios Error Details:', error.response);
//       toast.error('Error during stadium addition. Please try again.', {});
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'images_url') {
//       const files = e.target.files;
//       const imagesArray = Array.from(files).slice(0, 5); // Limit to 5 images
//       setFormData({
//         ...formData,
//         images_url: imagesArray,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const fetchUserData = () => {
//     let token = Cookies.get('authToken') || localStorage.getItem('isLoggedIn');

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return null;
//     }

//     return token;
//   };

//   return (
//     <div className="flex items-center justify-center p-12">
//       <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
//         <form onSubmit={handleSubmit}>
//           <h1 className="font-bold mt-5 text-2xl">Welcome to Add Playground Form</h1>

//           <div className="mb-5 mt-7">
//             <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Full Name"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="location" className="mb-3 block text-base font-medium text-[#07074D]">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               id="location"
//               placeholder="Location"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-5">
//             <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               id="city"
//               placeholder="City"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="hourly_rate" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   name="hourly_rate"
//                   id="hourly_rate"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="size" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Size
//                 </label>
//                 <input
//                   type="text"
//                   name="size"
//                   id="size"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="start_time" className="mb-3 block text-base font-medium text-[#07074D]">
//                   Start Time
//                 </label>
//                 <input
//                   type="time"
//                   name="start_time"
//                   id="start_time"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="w-full px-3 sm:w-1/2">
//               <div className="mb-5">
//                 <label htmlFor="end_time" className="mb-3 block text-base font-medium text-[#07074D]">
//                   End Time
//                 </label>
//                 <input
//                   type="time"
//                   name="end_time"
//                   id="end_time"
//                   className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-5">
//             <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
//               Description
//             </label>
//             <textarea
//               name="description"
//               id="description"
//               placeholder="Any additional notes or requests?"
//               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div className="mb-5">
//             <label htmlFor="images_url" className="mb-3 block text-base font-medium text-[#07074D]">
//               Upload Images (Up to 5)
//             </label>
//             <input
//               type="file"
//               name="images_url"
//               id="images_url"
//               accept="image/*"
//               multiple
//               onChange={handleChange}
//             />
//           </div>

//           <button
//             type="submit"
//             className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
//           >
//             Next Step
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddFormPlay;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getStorage } from 'firebase/storage';

const AddFormPlay = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    location: '',
    size: '',
    hourly_rate: '',
    description: '',
    phone: '',
    start_time: '',
    end_time: '',
    images_url: [],
  });

  // const storage = getStorage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = fetchUserData();

    if (!token) {
      toast.error('User not authenticated. Please log in.', {});
      return;
    }

    // const storageRef = ref(storage, 'stadium-images');

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images_url') {
        value.forEach((image) => {
          formDataToSend.append('images_url', image);
        });
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post('http://localhost:2000/add-stadium', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201 || response.status === 200) {
        toast.success('Stadium added successfully!', {});
        navigate('/price');
      } else {
        console.error('Stadium addition failed with status:', response.status);
        toast.error('Stadium addition failed. Please try again.', {});
      }
      
    } catch (error) {
      console.error('Error during stadium addition:', error);
      console.error('Axios Error Details:', error.response);
      toast.error('Error during stadium addition. Please try again.', {});
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'images_url') {
      const files = e.target.files;
      const imagesArray = Array.from(files).slice(0, 5);
      setFormData({
        ...formData,
        images_url: imagesArray,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const fetchUserData = () => {
    let token = Cookies.get('authToken') || localStorage.getItem('isLoggedIn');

    if (!token) {
      console.error('Token not found. User not authenticated.');
      return null;
    }

    return token;
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold mt-5 text-2xl">Welcome to Add Playground Form</h1>
          
          <div className="mb-5 mt-7">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="location" className="mb-3 block text-base font-medium text-[#07074D]">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="hourly_rate" className="mb-3 block text-base font-medium text-[#07074D]">
                  Price
                </label>
                <input
                  type="number"
                  name="hourly_rate"
                  id="hourly_rate"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="size" className="mb-3 block text-base font-medium text-[#07074D]">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="start_time" className="mb-3 block text-base font-medium text-[#07074D]">
                  Start Time
                </label>
                <input
                  type="time"
                  name="start_time"
                  id="start_time"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="end_time" className="mb-3 block text-base font-medium text-[#07074D]">
                  End Time
                </label>
                <input
                  type="time"
                  name="end_time"
                  id="end_time"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Any additional notes or requests?"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-5">
            <label htmlFor="images_url" className="mb-3 block text-base font-medium text-[#07074D]">
              Upload Images (Up to 5)
            </label>
            <input
              type="file"
              name="images_url"
              id="images_url"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Next Step
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddFormPlay;
