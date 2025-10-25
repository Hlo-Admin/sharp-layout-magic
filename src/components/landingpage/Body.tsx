// import React from 'react';
// import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import image from "/landingPage/image.png"
// const Body = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Case Studies Section */}
//       <section className="mb-16">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//           <div>
//             <h2 className="text-4xl font-bold text-text-heading mb-2">Case Studies</h2>
//             <p className="text-lg text-text-body">Here's what we've been up to recently.</p>
//           </div>
//           <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
//             View all
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Featured Article Block */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Image Section */}
//             <div className="relative lg:w-[425px] lg:h-[500px] h-[300px] sm:h-[400px]">
//               <img
//                 src={image}
//                 alt="Featured case study"
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Navigation Arrows */}
//               <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105">
//                 <ChevronLeft className="w-5 h-5 text-gray-700" />
//               </button>
//               <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105">
//                 <ChevronRight className="w-5 h-5 text-gray-700" />
//               </button>
//             </div>

//             {/* Content Section */}
//             <div className="flex-1 p-8 lg:p-12">
//               {/* Featured Tag */}
//               <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
//                 FEATURED
//               </div>

//               {/* Title */}
//               <h3 className="text-3xl lg:text-4xl font-bold text-text-heading mb-6 leading-tight">
//                 How Branding Help your Business Grow 10X
//               </h3>

//               {/* Description */}
//               <p className="text-text-body text-lg leading-relaxed mb-8">
//                 In this digital generation where information can be easily obtained within seconds, business cards and traditional marketing methods are becoming obsolete. A strong brand identity is now more important than ever to stand out in the competitive market.
//               </p>

//               {/* Author and Date */}
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex items-center gap-3 mb-4 sm:mb-0">
//                   <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
//                     <span className="text-white font-semibold text-sm">VM</span>
//                   </div>
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold text-text-heading">Viola Manisa</span>
//                       <div className="flex items-center gap-1 text-green-600">
//                         <Check className="w-4 h-4" />
//                         <span className="text-sm">Verified writer</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="text-text-body font-medium">
//                   02 May
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Body;
import React from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
// REMOVED: import image from "/landingPage/image.png"
// Assets in the public folder are referenced directly by their path
import img1 from "/landingpage/Image.png"
const Body = () => { // Renamed 'Body' to 'CaseStudySection' for clarity
  // The path to the image in the public folder
//   const imagePath = "/landingPage/image.png";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Case Studies Section */}
      <section className="mb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-text-heading mb-2">Case Studies</h2>
            <p className="text-lg text-text-body">Here's what we've been up to recently.</p>
          </div>
          {/* <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            View all
            <ChevronRight className="w-5 h-5" />
          </button> */}

<button className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors border border-primary">
  View all
  <ChevronRight className="w-5 h-5" />
</button>
        </div>

        {/* Featured Article Block */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative lg:w-[425px] lg:h-[500px] h-[180px] sm:h-[400px]">
              <img
                // FIX: Use the root-relative path directly for public folder assets
                src={img1} 
                alt="Featured case study"
                className="w-full h-half object-cover mt-[67px]"
              />
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 lg:p-12 mt-[-24]">
              {/* Featured Tag */}
              <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                FEATURED
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-text-heading mb-6 leading-tight">
                How Branding Help your Business Grow 10X
              </h3>

              {/* Description */}
              <p className="text-text-body text-lg leading-relaxed mb-8">
                In this digital generation where information can be easily obtained within seconds, business cards and traditional marketing methods are becoming obsolete. A strong brand identity is now more important than ever to stand out in the competitive market.
              </p>

              {/* Author and Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 mb-4 sm:mb-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">VM</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-heading">Viola Manisa</span>
                      <div className="flex items-center gap-1 text-green-600">
                        <Check className="w-4 h-4" />
                        <span className="text-sm">Verified writer</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-text-body font-medium">
                  02 May
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;