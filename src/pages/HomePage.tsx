import React from "react";
import Navbar from "../components/Navbar";
import BubblesBackground from "../components/BubblesBackground";
import SearchBar from "../components/SearchBar";
import CategoryTags from "../components/CategoryTags";
import ActiveHiring from "../components/ActiveHiring";
import TopCategoryJobs from "../components/TopCategoryJobs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden ">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Your Next Career Move Starts Here
            </h1>
            <p className="text-lg text-black max-w-3xl mx-auto">
              <span className="font-semibold">25,000+</span> active job seekers
              found their dream jobs. You're next!
            </p>
          </div>

          <SearchBar />

          {/* <div className="mt-10 text-center">
            <span className="text-gray-800 text-lg font-semibold">
              Popular searches{" "}
            </span>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {[
                "Remote",
                "Software Engineer",
                "Data Scientist",
                "Marketing",
                "Finance",
              ].map((term, index) => (
                <a
                  key={index}
                  href={`/${term.toLowerCase().replace(" ", "-")}?k=${term
                    .toLowerCase()
                    .replace(" ", "+")}`}
                  className="bg-white hover:scale-105 text-gray-800 text-md border border-gray-200 py-1 px-4 rounded-full transition-transform duration-200"
                >
                  {term}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Category Tags Section */}
      <CategoryTags />

      {/* Active Hiring Section */}
      <ActiveHiring />

      {/* Top Category Jobs Sections */}
      <TopCategoryJobs
        category="Engineering"
        title="Top Engineering Leadership Jobs"
      />

      <TopCategoryJobs category="Software & IT" title="Top Backend Jobs" />

      <TopCategoryJobs category="Remote" title="Top Remote Jobs" />

      {/* Statistics Section */}
      <section className="py-16 relative overflow-hidden">
        {/* <BubblesBackground /> */}

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-2">
              Making Job Search Better for Everyone
            </h2>
            <p className="text-gray-600 font-semibold">
              Join thousands who have found their dream career with NxtHyre
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-800 mb-2">250K+</div>
              <div className="text-gray-800">Active Users</div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-800">Companies</div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-800 mb-2">120K+</div>
              <div className="text-gray-800">Jobs Posted</div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-800 mb-2">85%</div>
              <div className="text-gray-800">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

// import React from "react";
// import Navbar from "../components/Navbar";
// import BubblesBackground from "../components/BubblesBackground";
// import SearchBar from "../components/SearchBar";
// import CategoryTags from "../components/CategoryTags";
// import ActiveHiring from "../components/ActiveHiring";
// import TopCategoryJobs from "../components/TopCategoryJobs";
// import Footer from "../components/Footer";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
//         <BubblesBackground />

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//               Your Next Career Move Starts Here
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               <span className="font-semibold">25,000+</span> active job seekers
//               found their dream jobs. You're next!
//             </p>
//           </div>

//           <SearchBar />

//           <div className="mt-10 text-center">
//             <span className="text-blue-200 text-sm">Popular searches: </span>
//             <div className="flex flex-wrap justify-center gap-2 mt-2">
//               {[
//                 "Remote",
//                 "Software Engineer",
//                 "Data Scientist",
//                 "Marketing",
//                 "Finance",
//               ].map((term, index) => (
//                 <a
//                   key={index}
//                   href={`/${term.toLowerCase().replace(" ", "-")}?k=${term
//                     .toLowerCase()
//                     .replace(" ", "+")}`}
//                   className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm py-1 px-3 rounded-full transition-colors duration-200"
//                 >
//                   {term}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Category Tags Section */}
//       <CategoryTags />

//       {/* Active Hiring Section */}
//       <ActiveHiring />

//       {/* Top Category Jobs Sections */}
//       <TopCategoryJobs
//         category="Engineering"
//         title="Top Engineering Leadership Jobs"
//       />

//       <TopCategoryJobs category="Software & IT" title="Top Backend Jobs" />

//       <TopCategoryJobs category="Remote" title="Top Remote Jobs" />

//       {/* Statistics Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
//         <BubblesBackground />

//         <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center max-w-4xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Making Job Search Better for Everyone
//             </h2>
//             <p className="text-blue-100">
//               Join thousands who have found their dream career with NxtHyre
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div className="bg-white bg-opacity-10 rounded-lg p-6">
//               <div className="text-4xl font-bold text-white mb-2">250K+</div>
//               <div className="text-blue-100">Active Users</div>
//             </div>

//             <div className="bg-white bg-opacity-10 rounded-lg p-6">
//               <div className="text-4xl font-bold text-white mb-2">50K+</div>
//               <div className="text-blue-100">Companies</div>
//             </div>

//             <div className="bg-white bg-opacity-10 rounded-lg p-6">
//               <div className="text-4xl font-bold text-white mb-2">120K+</div>
//               <div className="text-blue-100">Jobs Posted</div>
//             </div>

//             <div className="bg-white bg-opacity-10 rounded-lg p-6">
//               <div className="text-4xl font-bold text-white mb-2">85%</div>
//               <div className="text-blue-100">Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;
