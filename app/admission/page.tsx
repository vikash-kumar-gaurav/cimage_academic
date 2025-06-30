
// "use client";
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { GiDiscussion } from "react-icons/gi";
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { FaInfoCircle, FaFileAlt, FaEdit, FaComments, FaClipboardList, FaGraduationCap } from 'react-icons/fa';
// import { IoIosCheckmarkCircle, IoIosCalendar } from 'react-icons/io';
// import { HiLightBulb } from 'react-icons/hi';
// import { MdAccessTime, MdOutlineDescription } from 'react-icons/md';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const AdmissionProcess = () => {
//   const headerRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const infoRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([]);


//   useEffect(() => {
//     // Header animation
//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: -30,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Timeline container animation
//     gsap.from(timelineRef.current, {
//       opacity: 0,
//       y: 20,
//       scrollTrigger: {
//         trigger: timelineRef.current,
//         start: "top 90%",
//       },
//       duration: 0.8,
//       delay: 0.2,
//     });

//     // Step animations
//     stepRefs.current.forEach((step, index) => {
//       if (step) {
//         gsap.from(step, {
//           opacity: 0,
//           y: 30,
//           scrollTrigger: {
//             trigger: step,
//             start: "top 90%",
//           },
//           duration: 0.8,
//           delay: index * 0.15,
//         });
//       }
//     });

//     // Additional info animation
//     gsap.from(infoRef.current, {
//       opacity: 0,
//       y: 30,
//       scrollTrigger: {
//         trigger: infoRef.current,
//         start: "top 90%",
//       },
//       duration: 0.8,
//       delay: 0.2,
//     });

//     // CTA animation
//     gsap.from(ctaRef.current, {
//       opacity: 0,
//       y: 30,
//       scrollTrigger: {
//         trigger: ctaRef.current,
//         start: "top 90%",
//       },
//       duration: 0.8,
//       delay: 0.2,
//     });
//   }, []);

//   const admissionSteps = [
    
//     {
//       id: 1,
//       title: "Admission Form",
//       icon: <FaFileAlt className="text-xl" />,
//       description: "Complete our comprehensive online application form with your personal and academic details.",
//       details: "The application form requires your personal information, academic history, extracurricular activities, and a personal statement. Ensure all details are accurate and complete. You'll need to provide transcripts, letters of recommendation, and any standardized test scores.",
//       date: "Apply Online"
//     },
//     {
//       id: 2,
//       title: "Written Exam",
//       icon: <FaEdit className="text-xl" />,
//       description: "Demonstrate your academic abilities through our standardized entrance examination.",
//       details: "The written exam assesses critical thinking, problem-solving abilities, and subject-specific knowledge. It typically includes sections on mathematics, language skills, and logical reasoning. Preparation materials and sample questions are available on our website.",
//       date: "Scheduled 3 months before term"
//     },
//     {
//       id: 3,
//       title: "Interview",
//       icon: <FaComments className="text-xl" />,
//       description: "Participate in a personal interview with our admission committee.",
//       details: "The interview allows us to learn more about your interests, goals, and personality. It's an opportunity for you to showcase your communication skills, intellectual curiosity, and passion for learning. Interviews are conducted either in-person or virtually.",
//       date: "Scheduled 2 months before term"
//     },
//     {
//       id: 4,
//       title: "Parents-Intraction",
//       icon: <GiDiscussion className="text-xl" />,
//       description: "Intro to the the teachers for mitual understanding",
//       details: "The details intaction between teacher parents and students, given the intraction to the students and rules of the college more",
//       date: "Scheduled 2 months before term"
//     }
    
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div 
//           ref={headerRef}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Cimage <span className="text-orange-500">Admission Process</span>
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Your journey to academic excellence begins here. Follow our step-by-step admission roadmap to join our vibrant learning community.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div ref={timelineRef} className="relative">
//           {/* Vertical line */}
//           <div className="hidden md:block absolute left-1/2 top-0 rounded-full bottom-0 w-1 bg-gradient-to-b from-orange-300 to-orange-100 transform -translate-x-1/2"></div>
          
//           {/* Steps */}
//           <div className="space-y-12">
//             {admissionSteps.map((step, index) => (
//               <div 
//                 key={step.id}
//                 ref={el => stepRefs.current[index] = el}
//                 className="relative group"
//               >
//                 {/* Step container */}
//                 <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
//                   {/* Content */}
//                   <div className={`md:w-1/2 p-6 rounded-2xl bg-white shadow-lg border border-orange-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group-hover:border-orange-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
//                     <div className="flex items-center mb-4">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white mr-4 shadow-md">
//                         {step.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
//                         <div className="flex items-center text-sm text-orange-600 mt-1">
//                           <IoIosCalendar className="mr-1" />
//                           <span>{step.date}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 mb-4">{step.description}</p>
//                     <p className="text-gray-700">{step.details}</p>
                    
//                     <div className="mt-4 flex items-center text-sm text-gray-500">
//                       <HiLightBulb className="text-orange-400 mr-2 text-lg" />
//                       <span className="font-medium">Tip: {index === 0 ? "Review requirements early" : index === 1 ? "Double-check all details" : index === 2 ? "Practice with sample questions" : index === 3 ? "Prepare questions to ask" : index === 4 ? "Check email regularly" : "Complete all paperwork promptly"}</span>
//                     </div>
//                   </div>
                  
//                   {/* Circle marker */}
//                   <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white">
//                       {step.id}
//                     </div>
//                   </div>
                  
//                   {/* Mobile circle marker */}
//                   <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
//                     {step.id}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div 
//           ref={infoRef}
//           className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
//         >
//           <div className="flex items-center mb-6">
//             <IoIosCheckmarkCircle className="text-3xl text-orange-500 mr-3" />
//             <h2 className="text-2xl font-bold text-gray-800">Key Admission Information</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-100">
//               <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
//                 <FaFileAlt className="text-orange-500 mr-2" /> Required Documents
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Completed application form
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Official academic transcripts
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Two letters of recommendation
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Personal statement (500-800 words)
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Standardized test scores (if applicable)
//                 </li>
//               </ul>
//             </div>
            
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-100">
//               <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
//                 <FaComments className="text-orange-500 mr-2" /> Admission Tips
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Start your application early
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Tailor your personal statement to our values
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Highlight unique experiences and achievements
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Prepare thoughtful questions for the interview
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">•</span> Follow up after each stage of the process
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="mt-8 pt-6 border-t border-orange-200">
//             <div className="flex items-start mb-4">
//               <MdOutlineDescription className="text-2xl text-orange-500 mr-3 mt-1" />
//               <h3 className="font-bold text-lg text-gray-800">Holistic Review Process</h3>
//             </div>
//             <p className="text-gray-700 pl-9">
//               Our admission committee takes a comprehensive approach to reviewing applications. While academic excellence is important, 
//               we also value diversity, leadership potential, and unique personal qualities. We encourage applications from all 
//               backgrounds and offer need-based financial aid to eligible students. Application fee waivers are available for 
//               qualifying candidates to ensure equal access to our programs.
//             </p>
            
//             <div className="flex items-start mt-6">
//               <MdAccessTime className="text-2xl text-orange-500 mr-3 mt-1" />
//               <h3 className="font-bold text-lg text-gray-800">Important Deadlines</h3>
//             </div>
//             <p className="text-gray-700 pl-9">
//               Early applications are strongly encouraged as admission is competitive. Our regular admission deadline is January 15th 
//               for the fall semester and October 1st for the spring semester. Late applications may be considered on a space-available 
//               basis. All supporting documents must be received within two weeks of the application deadline.
//             </p>
//           </div>
//         </div>
//         {/* youtube video */}
//         <div className='w-full my-9 items-center flex justify-center'>
//             <iframe width="1080" height="700" className='rounded-md md:h-96 h-64 md:w-full' src="https://www.youtube.com/embed/OM--5qQrZ8s?si=rTbzH6WNCyCwb_nS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         </div>

//         {/* CTA */}
//         <div 
//           ref={ctaRef}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
//             <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
//               Join our community of scholars and innovators. Start your application today and take the first step toward an exceptional educational experience.
//             </p>
//             <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 active:scale-95">
//               Start Application Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdmissionProcess;
import React from 'react'

const Admission = () => {
  return (
    <div>Admission Page</div>
  )
}

export default Admission