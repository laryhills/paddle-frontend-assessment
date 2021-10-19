import React, { useState } from "react";

export default function MobileMenu({ logo }) {
  const [showMobileMuenu, setShowMobileMuenu] = useState(false);
  return (
    <>
      {/* <!-- Mobile menu button --> */}
      <div className="md:hidden flex justify-between">
        <img
          src={logo}
          alt="peddle"
          style={{ height: "19px", width: "60px" }}
        />
        <button
          className="outline-none"
          onClick={() => setShowMobileMuenu(!showMobileMuenu)}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* <!-- Mobile menu --> */}
      <div className={`${showMobileMuenu ? "" : "hidden"} mobile-menu`}>
        <ul>
          <li className="active">
            <a
              href="/homepage"
              className="
          block
          text-sm
          px-2
          py-2
          text-white
          bg-primary
          font-semibold
        "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              FAQS
            </a>
          </li>
          <li>
            <a
              href="#prcing"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#signin"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="#sigup"
              className="
          block
          text-sm
          px-2
          py-4
          hover:bg-primary
          transition
          duration-300
        "
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
