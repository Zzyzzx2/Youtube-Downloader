import React, { useState } from "react";
import Logo from "./assets/logo.png";
import SingleLink from "./SingleLink.jsx";
import Playlist from "./PlaylistLink.jsx";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("singleVideo");
  const [link, setLink] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("mp3");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const getPlaceholderText = () => {
    return selectedOption === "singleVideo"
      ? "Enter Link to Single Video"
      : "Enter Link to Playlist";
  };

  const handleSearch = () => {
    // Call the appropriate function based on the selected option
    if (selectedOption === "singleVideo") {
      // Call the function for SingleLink component
      console.log("Calling SingleLink component");
    } else if (selectedOption === "playlist") {
      // Call the function for Playlist component
      console.log("Calling Playlist component");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center">
        <div className="flex items-center mb-2 text-center">
          <img src={Logo} alt="Logo" className="h-16 mr-4" />
          <div>
            <h1 className="text-2xl font-bold">Youtube Downloader</h1>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg  w-96 flex flex-col items-center justify-center">
          <div className="flex mb-2">
            <div className="m-4">
              <button
                onClick={() => handleFormatChange("mp3")}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${
                  selectedFormat === "mp3" ? "bg-teal-300" : ""
                }`}
              >
                MP3
              </button>
            </div>
            <div className="m-4">
              <button
                onClick={() => handleFormatChange("mp4")}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${
                  selectedFormat === "mp4" ? "bg-teal-300" : ""
                }`}
              >
                MP4
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="m-4">
              <button
                onClick={() => handleOptionChange("singleVideo")}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${
                  selectedOption === "singleVideo" ? "bg-teal-300" : ""
                }`}
              >
                Single
              </button>
            </div>
            <div className="m-4">
              <button
                onClick={() => handleOptionChange("playlist")}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ${
                  selectedOption === "playlist" ? "bg-teal-300" : ""
                }`}
              >
                Playlist
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder={getPlaceholderText()}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleSearch}
          className="text-center border-black bg-lime-300 border-2 p-2 rounded-lg hover:bg-lime-200"
        >
          Download
        </button>
        {selectedOption === "singleVideo" ? (
          <SingleLink link={link} selectedFormat={selectedFormat} />
        ) : (
          <Playlist link={link} selectedFormat={selectedFormat} />
        )}
      </div>
    </div>
  );
};

export default App;
