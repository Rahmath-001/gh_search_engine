import React from 'react'

const Contactus = () => {
  return (
    <>
          <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-4">Feel free to reach out to us via the following channels:</p>
        
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 font-semibold">GitHub:</p>
            <a 
              href="https://github.com/rahmath-001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              github.com/rahmath-001
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 font-semibold">Email:</p>
            <a 
              href="mailto:rehamathullah7@gmail.com" 
              className="text-blue-500 hover:underline"
            >
              rehamathullah7@gmail.com
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 font-semibold">Phone:</p>
            <p className="text-gray-600">+91 7730078806</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contactus
