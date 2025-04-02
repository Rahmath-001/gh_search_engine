import React from 'react'

const Aboutus = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">About GitHub Search Engine</h1>
        <p className="text-lg text-gray-300 mb-6">
          This project allows users to search for GitHub profiles effortlessly. Simply enter a username,
          and you will get detailed information about the user, including repositories, followers, and more.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Features</h2>
          <ul className="text-gray-400 space-y-2">
            <li>🔍 Search for any GitHub user</li>
            <li>📂 View repositories and follower details</li>
            <li>⚡ Lightning-fast API integration</li>
            <li>🎨 Modern and responsive UI</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">How to Use</h2>
          <p className="text-gray-300">
            Enter a GitHub username in the search bar and get instant profile insights. It's that simple!
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus
