import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { companiesData } from "../data/jobsData";
import { Link } from "react-router-dom";

const ActiveHiring = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollAmount += scrollSpeed;

      // If we've scrolled past an item, reset to create infinite loop
      if (scrollAmount >= scrollContainer.firstElementChild.offsetWidth) {
        scrollAmount = 0;

        // Move the first item to the end
        const firstItem = scrollContainer.firstElementChild;
        scrollContainer.appendChild(firstItem.cloneNode(true));
        scrollContainer.removeChild(firstItem);
      }

      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="py-12 bg-white max-w-5xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Top Companies Hiring
            </h2>
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Urgent
            </span>
          </div>

          <div className="overflow-hidden relative">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

            {/* Right fade effect */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            <div className="flex overflow-hidden">
              <div className="flex" ref={scrollContainerRef}>
                {/* Duplicate the items to create a seamless loop */}
                {[...companiesData, ...companiesData].map((company, index) => (
                  <div
                    key={`${company.id}-${index}`}
                    className="w-64 flex-shrink-0 mx-4"
                  >
                    <Link
                      to={`/companies/${company.name.toLowerCase()}`}
                      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="relative">
                        <div className="p-6 pt-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center bg-white">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-16 h-16 object-contain rounded-full"
                            />
                          </div>
                          <h3 className="text-center font-medium text-gray-800 mb-1">
                            {company.name}
                          </h3>
                          <p className="text-center text-gray-500 text-sm">
                            {company.openings} openings
                          </p>
                        </div>

                        <div
                          className={`absolute top-0 right-0 ${
                            company.status === "Urgently Hiring"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          } text-xs font-medium px-1.5 py-1`}
                        >
                          {company.status}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 p-4 flex items-center justify-center text-sm text-blue-600 font-medium hover:text-purple-800 transition-colors duration-200">
                        View Jobs <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveHiring;
