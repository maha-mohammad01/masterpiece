import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function SignUp() {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignUp = async () => {
    try {
      // Basic form validation using regex
      if (!full_name || !email || !password) {
        setError('Please fill in all fields.');
        return;
      }

      if (!nameRegex.test(full_name)) {
        setError('Invalid full name. Without Spaces.');
        return;
      }

      if (!emailRegex.test(email)) {
        setError('Invalid email address.');
        return;
      }

      if (!passwordRegex.test(password)) {
        setError(
          'Password must be at least 8 characters long and contain at least one letter and one number.'
        );
        return;
      }

      const response = await axios.post('http://localhost:2000/register', {
        "full_name": full_name,
        "email":email,
        "password":password,
        "rememberMe":rememberMe,
      });

      if (response.status === 200 || response.status === 201) {
              Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Sign Up successful',
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect the user to the appropriate page after registration
        navigate('/');      }
    } catch (error) {
      // Handle registration failure
      console.error('Error:', error.response);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen z-[-10] mt-11">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 bg-clip-border shadow-emerald-600/40">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            Sign Up
          </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-emerald-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-emerald-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-emerald-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-emerald-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Full Name
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-emerald-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-emerald-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-emerald-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-emerald-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-emerald-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          <div className="-ml-2.5">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:bg-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
                  id="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="checkbox"
              >
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-emerald-600 to-emerald-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg hover:shadow-emerald-600/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Already have an account?
            <Link
              to="/login"
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-emerald-600"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

