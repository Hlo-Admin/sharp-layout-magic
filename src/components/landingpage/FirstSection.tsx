import React from 'react';
import img1 from "/landingpage/leftimage.png"
import img2 from "/landingpage/Rightimage.png"
import img3 from "/landingpage/Item1.png"
import img4 from "/landingpage/item2.png"
import img5 from "/landingpage/Item3.png"
import img6 from "/landingpage/round2.png"
import img7 from "/landingpage/round22.png"
import img8 from "/landingpage/round33.png"
function FirstSection() {
    return (
        <div className="mt-[-261px]">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 ">
                        All Articles
                    </h2>
                    <br />
                    <br />
                    
                    <p className="text-gray-600  ">
                        We share common trends, strategies ideas, opinions, short & long stories from the<br/> team behind company.
                    </p><br />
                    <br />
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Top Row - Left Card */}
                    <div className="relative group">
                        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                // src="https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                              src={img1}
                                alt="Smartwatch" 
                                className="w-half h-half object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Featured Tag */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    FEATURED
                                </span>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                    How to Get your Corporate Business Setup in a week
                                </h3>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">Viola Manisa</span>
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs text-gray-300">Verified writer</span>
                                    </div>
                                    <span className="text-sm">02 May</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Row - Right Card */}
                    <div className="relative group">
                        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src={img2}
                                alt="Wind Turbine" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Featured Tag */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    FEATURED
                                </span>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                    Green Energy Business in UAE
                                </h3>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">Joshua William</span>
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs text-gray-300">Verified writer</span>
                                    </div>
                                    <span className="text-sm">02 May</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Three Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Future of Work */}
                    <div className="relative group">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                // src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                              src={img3}
                                alt="Laptop with code" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                    Future of Work
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    Majority of people will work in jobs that don't exist today.
                                </p>
                                <div className="flex items-center justify-between text-white">
                                  
                                    <div className="flex items-center gap-2">
                                    <span><img src={img6} alt="" /></span>
                                        <span className="text-sm font-medium">Lina Hicks</span>
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg><br />
                                        
                                    </div><div>
                                    
                                    </div>
                                    <span className="text-sm">02 May</span>
                                   
                                </div>
                              &nbsp   
                            </div>
                            
                        </div>
                    </div>

                    {/* Future of Data */}
                    <div className="relative group">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                // src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             src={img4}   alt="Drone" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                    Future of Data
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    Thanks to never-ending piles of data & the amount of insight
                                </p>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-2">
                                        <span>
                                            <img src={
                                                img7
                                            } alt="" />
                                        </span>
                        

                                        <span className="text-sm font-medium">Tyler Murray</span>
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {/* <span className="text-xs text-gray-300">Verified writer</span> */}
                                    </div>
                                    <span className="text-sm">02 May</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Future of Learning */}
                    <div className="relative group">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                // src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                           src={img5}   
                             alt="Smartphone" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                    Future of Learning
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    A constant ability to learn will be on the most crucial skills
                                </p>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-2">
                                        <span>
                                            <img src={img8} alt="" />
                                        </span>
                                        <span className="text-sm font-medium">Warren Casey</span>
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {/* <span className="text-xs text-gray-300">Verified writer</span> */}
                                    </div>
                                    <span className="text-sm">02 May</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstSection;