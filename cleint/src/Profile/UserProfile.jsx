// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const Profile = () => {
//   const [userId, setUserId] = useState(1);
//   const [full_name, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [formbookingData, setFormBookingData] = useState([]);
//   const [wishlistData, setWishlistData] = useState([]);
//   const [userData, setUserData] = useState({ image: '' });
//   const [newUserData, setNewUserData] = useState({ full_name: '', email: '' });
//   const [userImage, setUserImage] = useState('');
//   const [activeTab, setActiveTab] = useState('EditProfile');

  
//   const fetchUserData = () => {
//     let token = Cookies.get('authToken');
  
//     if (!token) {
//       // If token is not found in cookies, check localStorage
//       token = localStorage.getItem('authToken');
//     }
  
//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       // Handle authentication failure (redirect to login, show error, etc.)
//       return;
//     }
  
//     axios.get('http://localhost:2000/user-profile', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => {
//         setUserData(response.data.user);
//         setFullName(response.data.user.full_name);
//         setEmail(response.data.user.email);
//         setNewUserData({
//           full_name: response.data.user.full_name,
//           email: response.data.user.email,
//         });
//         // setUserImage(`http://localhost:3010/upload-upic/${response.data.user.image}`);
//            setUserImage(`http://localhost:3010/upload-upic/${response.data.user.image}`);

//       })
//       .catch(error => {
//         console.error('Error fetching user data: ', error);
//       });
//   };
  
  
  

//   const handleSaveDataChanges = async () => {
//     try {
//       console.log('New User Data:', newUserData);
  
//       let token = Cookies.get('authToken') || localStorage.getItem('authToken');
  
//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         // Handle authentication failure (e.g., redirect to login, show error message, etc.)
//         return;
//       }
  
//       // Show loading indicator here
  
//       const response = await axios.put(`http://localhost:2000/update-user`, newUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       // Hide loading indicator here
  
//       // Display a success message and log the response data
//       alert('Changes saved successfully');
//       console.log('Response data:', response.data);
  
//       // Redirect or update UI as needed
//     } catch (error) {
//       console.error('Error saving changes: ', error);
  
//       if (error.response) {
//         // Handle server response errors
//         console.error('Server responded with non-success status:', error.response.status);
//         console.error('Response data:', error.response.data);
//         // Show user-friendly error message based on the response
//       } else if (error.request) {
//         // Handle cases where the request was made but no response was received
//         console.error('No response received from the server');
//         // Show user-friendly error message
//       } else {
//         // Handle other request setup errors
//         console.error('Error during request setup:', error.message);
//         // Show user-friendly error message
//       }
  
//       // Hide loading indicator here (if it was shown)
//     }
//   };
  
 


  
  

//   const handleSaveImageChanges = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('image', newUserData.image);
  
//       const token = Cookies.get('authToken') || localStorage.getItem('authToken');
//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         // Handle authentication failure (e.g., redirect to login, show error message, etc.)
//         return;
//       }
  
//       await axios.post(`http://localhost:2000/upload-upic`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Display a success message
//       alert('Image changes saved successfully');
//     } catch (error) {
//       console.error('Error saving image changes: ', error);
//       // Handle error (display error message, etc.)
//     }
//   };
  
//   const handleImageChange = (e) => {
//     if (e.target.files.length > 0) {
//       const selectedImage = e.target.files[0];
//       setNewUserData({
//         ...newUserData,
//         image: selectedImage,
//       });
//       setUserImage(URL.createObjectURL(selectedImage));
//     }
//   };
  

//   useEffect(() => {
//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     // جلب البيانات وتحديث formbookingData
//     axios.get('http://localhost:2000/user-profile')
//       .then(response => {
//         setFormBookingData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching form booking data: ', error);
//       });
//   }, []);

//   useEffect(() => {
//     // جلب البيانات وتحديث wishlistData
//     axios.get('http://example.com/api/wishlist')
//       .then(response => {
//         setWishlistData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching wishlist data: ', error);
//       });
//   }, []); 

//   return (
//       <div>
//         <div className="sm mt-24 bg-emerald-500 h-52 w-full flex items-center justify-center relative ">
//           {/* Display the user's profile image outside the container */}
//           <img
//             src={userImage}
//             className="h-32 w-32 rounded-full border-4 border-white absolute"
//             style={{ top: '50%', transform: 'translateY(-50%)' }}
//           />
//         </div>
  
//         <div className="sm mt-20">
//           <div className="text-center p-4">
//             {/* Content container without background */}
//             <div>
//               <span className="font-medium text-gray-900">{full_name}</span><br />
//               <span className="text-gray-500">{email}</span><br />
//             </div>
//           </div>
//         </div>


//       <ul className="text-sm font-medium text-center text-emerald-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-emerald-700 dark:text-emerald-400">
//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('EditProfile')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'EditProfile'
//                 ? 'text-emerald-900 bg-gray-100'
//                 : 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//             } rounded-l-lg focus:ring-4 focus:ring-emerald-300 active focus:outline-none dark:bg-emerald-700 dark:text-white`}
//             aria-current={activeTab === 'EditProfile' ? 'page' : null}
//           >
//             Edit Profile
//           </a>
//         </li>

//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('formbooking')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'formbooking'
//                 ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//                 : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//             } focus-ring-4 focus-ring-blue-300 focus-outline-none`}
//             aria-current={activeTab === 'formbooking' ? 'page' : null}
//           >
//             Your Booking
//           </a>
//         </li>

//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('WishList')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'WishList'
//                 ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//                 : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//             } rounded-r-lg focus-ring-4 focus-outline-none focus-ring-blue-300`}
//             aria-current={activeTab === 'WishList' ? 'page' : null}
//           >
//             Wish List
//           </a>
//         </li>
//       </ul>

//       {activeTab === 'EditProfile' && (
//         <div className="flex justify-center mt-20 px-8">
//           <form className="max-w-2xl" encType="multipart/form-data" action="/update-profile" method="post">
//             <div className="border shadow rounded-lg p-6 bg-white dark:bg-emerald-600">
//               <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-300 mb-4">Account Settings</h2>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-emerald-400 block">Full Name</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="text"
//                   value={newUserData.full_name}
//                   onChange={(e) => setNewUserData({ ...newUserData, full_name: e.target.value })}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-emerald-400 block">Password</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="password"
//                 />
//               </div>



//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-gray-400 block ">Email</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="email"
//                   value={newUserData.email}
//                   onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-gray-400 block">Profile Picture</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="file"
//                   name="image"
//                   onChange={handleImageChange}
//                 />
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   onClick={handleSaveDataChanges}
//                   className="py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//                   type="button"
//                 >
//                   Save Data Changes
//                 </button>
//                 <button
//                   onClick={handleSaveImageChanges}
//                   className="ml-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//                   type="button"
//                 >
//                   Save Image Changes
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}

//       {activeTab === 'formbooking' && (
//         <div>
//           <h2>Your Booking:</h2>
//           {formbookingData && formbookingData.map((order) => (
//             <div key={order.id}>
//               <p>{order.orderNumber}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {activeTab === 'WishList' && (
//         <div>
//           <h2>Wishlist:</h2>
//           {wishlistData && wishlistData.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const Profile = () => {
//   const [userId, setUserId] = useState(1);
//   const [full_name, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [formbookingData, setFormBookingData] = useState([]);
//   const [wishlistData, setWishlistData] = useState([]);
//   const [userData, setUserData] = useState({ pic_user: '' }); // تعديل هنا ليكون الحقل هو 'pic_user'
//   const [newUserData, setNewUserData] = useState({ full_name: '', email: '', image: null });
//   const [userImage, setUserImage] = useState('');
//   const [activeTab, setActiveTab] = useState('EditProfile');

//   const fetchUserData = () => {
//     let token = Cookies.get('authToken');

//     if (!token) {
//       token = localStorage.getItem('authToken');
//     }

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return;
//     }

//     axios.get('http://localhost:2000/user-profile', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       console.log('Server Response:', response);

//       setUserData(response.data.user);
//       setFullName(response.data.user.full_name);
//       setEmail(response.data.user.email);
//       setNewUserData({
//         full_name: response.data.user.full_name,
//         email: response.data.user.email,
//         pic_user: null,
//       });
//       setUserImage(response.data.user.pic_user); // تعديل هنا
//     })
//     .catch(error => {
//       console.error('Error fetching user data: ', error);
//     });
//   };

//   const handleSaveDataChanges = async () => {
//     try {
//       let token = Cookies.get('authToken') || localStorage.getItem('authToken');

//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('full_name', newUserData.full_name);
//       formData.append('email', newUserData.email);
//       formData.append('pic_user', newUserData.image); // تعديل هنا

//       const response = await axios.put(`http://localhost:2000/update-user`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert('Changes saved successfully');
//       console.log('Response data:', response.data);
//     } catch (error) {
//       console.error('Error saving changes: ', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files.length > 0) {
//       const selectedImage = e.target.files[0];
//       setNewUserData({
//         ...newUserData,
//         image: selectedImage,
//       });
//       setUserImage(URL.createObjectURL(selectedImage));
//     }
//   };

//   const handleSaveImageChanges = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('pic_user', newUserData.image); // تعديل هنا

//       const token = Cookies.get('authToken') || localStorage.getItem('authToken');
//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         return;
//       }

//       const response = await axios.post('http://localhost:2000/upload-upic', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setUserImage(response.data.imageUrl);
//       alert('Image changes saved successfully');
//     } catch (error) {
//       console.error('Error saving image changes: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     axios.get('http://localhost:2000/user-profile')
//       .then(response => {
//         setFormBookingData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching form booking data: ', error);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get('http://example.com/api/wishlist')
//       .then(response => {
//         setWishlistData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching wishlist data: ', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="sm mt-24 bg-emerald-500 h-52 w-full flex items-center justify-center relative ">
//         <img
//           src={userImage}
//           className="h-32 w-32 rounded-full border-4 border-white absolute"
//           style={{ top: '50%', transform: 'translateY(-50%)' }}
//         />
//       </div>

//       <div className="sm mt-20">
//         <div className="text-center p-4">
//           <div>
//             <span className="font-medium text-gray-900">{full_name}</span><br />
//             <span className="text-gray-500">{email}</span><br />
//           </div>
//         </div>
//         </div>


// <ul className="text-sm font-medium text-center text-emerald-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-emerald-700 dark:text-emerald-400">
//   <li className="w-full">
//     <a
//       href="#"
//       onClick={() => setActiveTab('EditProfile')}
//       className={`inline-block w-full p-4 ${
//         activeTab === 'EditProfile'
//           ? 'text-emerald-900 bg-gray-100'
//           : 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//       } rounded-l-lg focus:ring-4 focus:ring-emerald-300 active focus:outline-none dark:bg-emerald-700 dark:text-white`}
//       aria-current={activeTab === 'EditProfile' ? 'page' : null}
//     >
//       Edit Profile
//     </a>
//   </li>

//   <li className="w-full">
//     <a
//       href="#"
//       onClick={() => setActiveTab('formbooking')}
//       className={`inline-block w-full p-4 ${
//         activeTab === 'formbooking'
//           ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//           : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//       } focus-ring-4 focus-ring-blue-300 focus-outline-none`}
//       aria-current={activeTab === 'formbooking' ? 'page' : null}
//     >
//       Your Booking
//     </a>
//   </li>

//   <li className="w-full">
//     <a
//       href="#"
//       onClick={() => setActiveTab('WishList')}
//       className={`inline-block w-full p-4 ${
//         activeTab === 'WishList'
//           ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//           : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//       } rounded-r-lg focus-ring-4 focus-outline-none focus-ring-blue-300`}
//       aria-current={activeTab === 'WishList' ? 'page' : null}
//     >
//       Wish List
//     </a>
//   </li>
// </ul>

// {activeTab === 'EditProfile' && (
//   <div className="flex justify-center mt-20 px-8">
//     <form className="max-w-2xl" encType="multipart/form-data" action="/update-profile" method="post">
//       <div className="border shadow rounded-lg p-6 bg-white dark:bg-emerald-600">
//         <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-300 mb-4">Account Settings</h2>

//         <div className="mb-4">
//           <label className="text-emerald-600 dark:text-emerald-400 block">Full Name</label>
//           <input
//             className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//             type="text"
//             value={newUserData.full_name}
//             onChange={(e) => setNewUserData({ ...newUserData, full_name: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="text-emerald-600 dark:text-emerald-400 block">Password</label>
//           <input
//             className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//             type="password"
//           />
//         </div>



//         <div className="mb-4">
//           <label className="text-emerald-600 dark:text-gray-400 block ">Email</label>
//           <input
//             className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//             type="email"
//             value={newUserData.email}
//             onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="text-emerald-600 dark:text-gray-400 block">Profile Picture</label>
//           <input
//             className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//             type="file"
//             name="image"
//             onChange={handleImageChange}
//           />
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleSaveDataChanges}
//             className="py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//             type="button"
//           >
//             Save Data Changes
//           </button>
//           <button
//             onClick={handleSaveImageChanges}
//             className="ml-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//             type="button"
//           >
//             Save Image Changes
//           </button>
//         </div>
//       </div>
//     </form>
//   </div>
// )}

// {activeTab === 'formbooking' && (
//   <div>
//     <h2>Your Booking:</h2>
//     {formbookingData && formbookingData.map((order) => (
//       <div key={order.id}>
//         <p>{order.orderNumber}</p>
//       </div>
//     ))}
//   </div>
// )}

// {activeTab === 'WishList' && (
//   <div>
//     <h2>Wishlist:</h2>
//     {wishlistData && wishlistData.map((item) => (
//       <div key={item.id}>
//         <p>{item.name}</p>
//       </div>
//     ))}
//   </div>
// )}
// </div>
// );
// }

// export default Profile;


//////////////////////////////update data and images /////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const Profile = () => {
//   const [userId, setUserId] = useState(1);
//   const [full_name, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [formbookingData, setFormBookingData] = useState([]);
//   const [wishlistData, setWishlistData] = useState([]);
//   const [userData, setUserData] = useState({ pic_user: '' });
//   const [newUserData, setNewUserData] = useState({ full_name: '', email: '', image: null });
//   const [userImage, setUserImage] = useState('');
//   const [activeTab, setActiveTab] = useState('EditProfile');
//   const [userBookings, setUserBookings] = useState([]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === 'formbooking') {
//       fetchUserBookings();
//     }
//   };


//   const fetchUserBookings = () => {
//     let token = Cookies.get('authToken') || localStorage.getItem('authToken');
  
//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return;
//     }
  
//     axios.get('http://localhost:2000/user-bookings', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => {
//         setUserBookings(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user bookings: ', error);
//       });
//   };
  
//   const fetchUserData = () => {
//     let token = Cookies.get('authToken');

//     if (!token) {
//       token = localStorage.getItem('authToken');
//     }

//     if (!token) {
//       console.error('Token not found. User not authenticated.');
//       return;
//     }

//     axios.get('http://localhost:2000/user-profile', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => {
//         setUserData(response.data.user);
//         setFullName(response.data.user.full_name);
//         setEmail(response.data.user.email);
//         setNewUserData({
//           full_name: response.data.user.full_name,
//           email: response.data.user.email,
//           pic_user: null,
//         });
//         setUserImage(response.data.user.pic_user);
//       })
//       .catch(error => {
//         console.error('Error fetching user data: ', error);
//       });
//   };

//   const handleSaveDataChanges = async () => {
//     try {
//       let token = Cookies.get('authToken') || localStorage.getItem('authToken');
  
//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         return;
//       }
  
//       const data = {
//         full_name: newUserData.full_name,
//         email: newUserData.email,
//       };
  
//       const response = await axios.put(`http://localhost:2000/update-user`, data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       // تحديث الحالة المحلية بالبيانات الجديدة
//       setUserData(response.data.user);
//       setFullName(response.data.user.full_name);
//       setEmail(response.data.user.email);
//       setNewUserData({
//         full_name: response.data.user.full_name,
//         email: response.data.user.email,
//         pic_user: null,
//       });
  
//       alert('Changes saved successfully');
//       console.log('Response data:', response.data);
//     } catch (error) {
//       console.error('Error saving changes: ', error);
//     }
//   };
  
//   const handleImageChange = (e) => {
//     if (e.target.files.length > 0) {
//       const selectedImage = e.target.files[0];
//       setNewUserData({
//         ...newUserData,
//         image: selectedImage,
//       });
//       setUserImage(URL.createObjectURL(selectedImage));
//     }
//   };

//   const handleSaveImageChanges = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('image', newUserData.image); // تأكيد اسم الحقل يتطابق مع اسم الحقل في الخادم
  
//       const token = Cookies.get('authToken') || localStorage.getItem('authToken');
//       if (!token) {
//         console.error('Token not found. User not authenticated.');
//         return;
//       }
  
//       const response = await axios.post('http://localhost:2000/upload-upic', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       setUserImage(response.data.imageUrl);
//       alert('Image changes saved successfully');
//     } catch (error) {
//       console.error('Error saving image changes: ', error);
//     }
//   };
  
  
//   useEffect(() => {
//     fetchUserData();
//   }, [userId]);

//   useEffect(() => {
//     axios.get('http://localhost:2000/user-profile')
//       .then(response => {
//         setFormBookingData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching form booking data: ', error);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get('http://example.com/api/wishlist')
//       .then(response => {
//         setWishlistData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching wishlist data: ', error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="sm mt-24 bg-emerald-500 h-52 w-full flex items-center justify-center relative ">
//         <img
//           src={userImage}
//           className="h-32 w-32 rounded-full border-4 border-white absolute"
//           style={{ top: '50%', transform: 'translateY(-50%)' }}
//           alt="User Profile"
//         />
//       </div>

//       <div className="sm mt-20">
//         <div className="text-center p-4">
//           <div>
//             <span className="font-medium text-gray-900">{full_name}</span><br />
//             <span className="text-gray-500">{email}</span><br />
//           </div>
//         </div>
//       </div>

//       <ul className="text-sm font-medium text-center text-emerald-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-emerald-700 dark:text-emerald-400">
//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('EditProfile')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'EditProfile'
//                 ? 'text-emerald-900 bg-gray-100'
//                 : 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//             } rounded-l-lg focus:ring-4 focus:ring-emerald-300 active focus:outline-none dark:bg-emerald-700 dark:text-white`}
//             aria-current={activeTab === 'EditProfile' ? 'page' : null}
//           >
//             Edit Profile
//           </a>
//         </li>

//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('formbooking')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'formbooking'
//                 ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//                 : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//             } focus-ring-4 focus-ring-blue-300 focus-outline-none`}
//             aria-current={activeTab === 'formbooking' ? 'page' : null}
//           >
//             Your Booking
//           </a>
//         </li>

//         <li className="w-full">
//           <a
//             href="#"
//             onClick={() => setActiveTab('WishList')}
//             className={`inline-block w-full p-4 ${
//               activeTab === 'WishList'
//                 ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
//                 : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
//             } rounded-r-lg focus-ring-4 focus-outline-none focus-ring-blue-300`}
//             aria-current={activeTab === 'WishList' ? 'page' : null}
//           >
//             Wish List
//           </a>
//         </li>
//       </ul>

//       {activeTab === 'EditProfile' && (
//         <div className="flex justify-center mt-20 px-8">
//           <form className="max-w-2xl" encType="multipart/form-data" action="/update-profile" method="post">
//             <div className="border shadow rounded-lg p-6 bg-white dark:bg-emerald-600">
//               <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-300 mb-4">Account Settings</h2>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-emerald-400 block">Full Name</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="text"
//                   value={newUserData.full_name}
//                   onChange={(e) => setNewUserData({ ...newUserData, full_name: e.target.value })}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-emerald-400 block">Password</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="password"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-gray-400 block ">Email</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="email"
//                   value={newUserData.email}
//                   onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="text-emerald-600 dark:text-gray-400 block">Profile Picture</label>
//                 <input
//                   className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
//                   type="file"
//                   name="image"
//                   onChange={handleImageChange}
//                 />
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   onClick={handleSaveDataChanges}
//                   className="py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//                   type="button"
//                 >
//                   Save Data Changes
//                 </button>
//                 <button
//                   onClick={handleSaveImageChanges}
//                   className="ml-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
//                   type="button"
//                 >
//                   Save Image Changes
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}

// {activeTab === 'formbooking' && (
//         <div>
//           <h2>Your Booking:</h2>
//           {userBookings.map((booking, index) => (
//             <div key={index}>
//               <p>{booking.name} - {booking.booking_date} - {booking.start_time} to {booking.end_time}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {activeTab === 'WishList' && (
//         <div>
//           <h2>Wishlist:</h2>
//           {wishlistData && wishlistData.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Profile = () => {
  const [userId, setUserId] = useState(1);
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [formbookingData, setFormBookingData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [userData, setUserData] = useState({ pic_user: '' });
  const [newUserData, setNewUserData] = useState({ full_name: '', email: '', image: null });
  const [userImage, setUserImage] = useState('');
  const [activeTab, setActiveTab] = useState('EditProfile');
  const [userBookings, setUserBookings] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'formbooking') {
      fetchUserBookings();
    }
  };

  const fetchUserBookings = async () => {
    try {
      let token = Cookies.get('authToken') || localStorage.getItem('authToken');

      if (!token) {
        console.error('Token not found. User not authenticated.');
        return;
      }

      const response = await axios.get('http://localhost:2000/user-bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data); // اطبع البيانات هنا

      setUserBookings(response.data.bookings || []);
    } catch (error) {
      console.error('Error fetching user bookings: ', error);
    }
  };

  const fetchUserData = () => {
    let token = Cookies.get('authToken');

    if (!token) {
      token = localStorage.getItem('authToken');
    }

    if (!token) {
      console.error('Token not found. User not authenticated.');
      return;
    }

    axios.get('http://localhost:2000/user-profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setUserData(response.data.user);
        setFullName(response.data.user.full_name);
        setEmail(response.data.user.email);
        setNewUserData({
          full_name: response.data.user.full_name,
          email: response.data.user.email,
          pic_user: null,
        });
        setUserImage(response.data.user.pic_user);
      })
      .catch(error => {
        console.error('Error fetching user data: ', error);
      });
  };

  const handleSaveDataChanges = async () => {
    try {
      let token = Cookies.get('authToken') || localStorage.getItem('authToken');

      if (!token) {
        console.error('Token not found. User not authenticated.');
        return;
      }

      const data = {
        full_name: newUserData.full_name,
        email: newUserData.email,
      };

      const response = await axios.put(`http://localhost:2000/update-user`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setUserData(response.data.user);
      setFullName(response.data.user.full_name);
      setEmail(response.data.user.email);
      setNewUserData({
        full_name: response.data.user.full_name,
        email: response.data.user.email,
        pic_user: null,
      });

      alert('Changes saved successfully');
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error saving changes: ', error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      setNewUserData({
        ...newUserData,
        image: selectedImage,
      });
      setUserImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleSaveImageChanges = async () => {
    try {
      const formData = new FormData();
      formData.append('image', newUserData.image);

      const token = Cookies.get('authToken') || localStorage.getItem('authToken');
      if (!token) {
        console.error('Token not found. User not authenticated.');
        return;
      }

      const response = await axios.post('http://localhost:2000/upload-upic', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setUserImage(response.data.imageUrl);
      alert('Image changes saved successfully');
    } catch (error) {
      console.error('Error saving image changes: ', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    fetchUserBookings();
  }, []); // Fetch bookings when the page loads

  useEffect(() => {
    axios.get('http://example.com/api/wishlist')
      .then(response => {
        setWishlistData(response.data);
      })
      .catch(error => {
        console.error('Error fetching wishlist data: ', error);
      });
  }, []);

  return (
    <div>
      <div className="sm mt-24 bg-emerald-500 h-52 w-full flex items-center justify-center relative ">
        <img
          src={userImage}
          className="h-32 w-32 rounded-full border-4 border-white absolute"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          alt="User Profile"
        />
      </div>

      <div className="sm mt-20">
        <div className="text-center p-4">
          <div>
            <span className="font-medium text-gray-900">{full_name}</span><br />
            <span className="text-gray-500">{email}</span><br />
          </div>
        </div>
      </div>

      <ul className="text-sm font-medium text-center text-emerald-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-emerald-700 dark:text-emerald-400">
        <li className="w-full">
          <a
            href="#"
            onClick={() => setActiveTab('EditProfile')}
            className={`inline-block w-full p-4 ${
              activeTab === 'EditProfile'
                ? 'text-emerald-900 bg-gray-100'
                : 'bg-white hover:text-emerald-700 hover:bg-gray-50'
            } rounded-l-lg focus:ring-4 focus:ring-emerald-300 active focus:outline-none dark:bg-emerald-700 dark:text-white`}
            aria-current={activeTab === 'EditProfile' ? 'page' : null}
          >
            Edit Profile
          </a>
        </li>

        <li className="w-full">
          <a
            href="#"
            onClick={() => handleTabClick('formbooking')}
            className={`inline-block w-full p-4 ${
              activeTab === 'formbooking'
                ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
                : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
            } focus-ring-4 focus-ring-blue-300 focus-outline-none`}
            aria-current={activeTab === 'formbooking' ? 'page' : null}
          >
            Your Booking
          </a>
        </li>

        <li className="w-full">
          <a
            href="#"
            onClick={() => setActiveTab('WishList')}
            className={`inline-block w-full p-4 ${
              activeTab === 'WishList'
                ? 'bg-white hover:text-emerald-700 hover:bg-gray-50'
                : 'dark-bg-gray-800 dark-hover-text-white dark-hover-bg-gray-700'
            } rounded-r-lg focus-ring-4 focus-outline-none focus-ring-blue-300`}
            aria-current={activeTab === 'WishList' ? 'page' : null}
          >
            Wish List
          </a>
        </li>
      </ul>

      {activeTab === 'EditProfile' && (
        <div className="flex justify-center mt-20 px-8">
          <form className="max-w-2xl" encType="multipart/form-data" action="/update-profile" method="post">
            <div className="border shadow rounded-lg p-6 bg-white dark:bg-emerald-600">
              <h2 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-300 mb-4">Account Settings</h2>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-emerald-400 block">Full Name</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="text"
                  value={newUserData.full_name}
                  onChange={(e) => setNewUserData({ ...newUserData, full_name: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-emerald-400 block">Password</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-gray-400 block ">Email</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="email"
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-emerald-600 dark:text-gray-400 block">Profile Picture</label>
                <input
                  className="w-full py-2 px-3 border border-emerald-300 rounded-md focus:outline-none focus:border-emerald-500"
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSaveDataChanges}
                  className="py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
                  type="button"
                >
                  Save Data Changes
                </button>
                <button
                  onClick={handleSaveImageChanges}
                  className="ml-2 py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:border-emerald-300"
                  type="button"
                >
                  Save Image Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'formbooking' && (
        <div>
          <h2>Your Booking:</h2>
          {Array.isArray(userBookings) && userBookings.length > 0 ? (
            userBookings.map((booking, index) => (
              <div key={index}>
                <p>{booking.name} - {booking.booking_date} - {booking.start_time} to {booking.end_time}</p>
              </div>
            ))
          ) : (
            <p>No bookings available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
