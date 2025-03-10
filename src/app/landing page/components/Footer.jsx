
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  // const [email, setEamil] = useState()
  // const [firstname, setFirstname] = useState()
  // const [lastname, setLastname] = useState()
  // const [contact, setContact] = useState()
  // const [comment, setComment] = useState()

  const sumbmitHandeler = (e) => {
  //   setComment("")
  //   setEamil("")
  //   setComment("")
  //   setContact("")
  //   setFirstname("")
  //   setLastname("")
  }

  return (
    <>
     
       <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Home Section*/}
          <div>
            <h3 className="text-lg font-semibold mb-2">Home</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Categories</li>
              <li>Devices</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Movies Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Movies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          {/* Shows Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Shows</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Subscription Section*/}
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscription</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plans</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-3">
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all">
                <FaFacebookF className="text-white text-lg" />
              </button>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all">
                <FaTwitter className="text-white text-lg" />
              </button>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all">
                <FaLinkedinIn className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p className="text-center md:text-left">©2023 Utsav, All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>  
      {/* Feedback form fields - FirstName, LastName, Email, Contact, Image Selection, Comments */}

      
    </>
  );
};

export default Footer;
