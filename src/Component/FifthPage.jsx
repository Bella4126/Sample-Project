// import { useState } from "react";
// import avatarIcon from "../assets/Group 1597881205.png";

// const menuItems = [
//   {
//     id: 1,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//       </svg>
//     )
//   },
//   {
//     id: 2,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     )
//   },
//   {
//     id: 3,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a1 1 0 01-2 2H10a2 2 0 01-2-2V6" />
//       </svg>
//     )
//   },
//   {
//     id: 4,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//       </svg>
//     )
//   },
//   {
//     id: 5,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     )
//   },
//   {
//     id: 6,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     )
//   },
//   {
//     id: 7,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//       </svg>
//     )
//   },
//   {
//     id: 8,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     )
//   },
//   {
//     id: 9,
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//       </svg>
//     )
//   },
// ];

// function TimerOverlay({ isOpen, onClose }) {
//   const [selectedDays, setSelectedDays] = useState(['Sat']);
//   const [hours, setHours] = useState('03');
//   const [minutes, setMinutes] = useState('00');
//   const [amPm, setAmPm] = useState('am');

//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'All'];

//   const toggleDay = (day) => {
//     if (day === 'All') {
//       if (selectedDays.includes('All')) {
//         setSelectedDays([]);
//       } else {
//         setSelectedDays(['All']);
//       }
//     } else {
//       if (selectedDays.includes('All')) {
//         setSelectedDays([day]);
//       } else {
//         setSelectedDays(prev => 
//           prev.includes(day) 
//             ? prev.filter(d => d !== day)
//             : [...prev, day]
//         );
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//    <div className="fixed inset-0 bg-lg-shadow bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
// <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">

//     {/* Header */}
//     <div className="flex items-center justify-between mb-6">
//       <div className="flex items-center space-x-2">
//         <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </div>
//         <span className="text-gray-600 text-sm font-semibold">Set Reminder</span>
//       </div>
//       <button
//         onClick={onClose}
//         className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
//       >
//         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>

// <div className="flex flex-col space-y-4">

//           <div className="flex-1">
//             <div className="bg-blue-50 rounded-lg p-3 mb-4">
// <div className="flex items-center justify-around">

//                 <input 
//                   type="text" 
//                   value={hours}
//                   onChange={(e) => setHours(e.target.value)}
//                   className="text-2xl font-bold text-teal-600 bg-transparent border-none outline-none w-8 text-center"
//                   maxLength="2"
//                 />
//                 <span className="text-2xl font-bold text-teal-600">:</span>
//                 <input 
//                   type="text" 
//                   value={minutes}
//                   onChange={(e) => setMinutes(e.target.value)}
//                   className="text-2xl font-bold text-teal-600 bg-transparent border-none outline-none w-8 text-center"
//                   maxLength="2"
//                 />
//                 <div className="ml-2 flex flex-col">
//                   <button 
//                     onClick={() => setAmPm('am')}
//                     className={`text-xs ${amPm === 'am' ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}
//                   >
//                     am
//                   </button>
//                   <button 
//                     onClick={() => setAmPm('pm')}
//                     className={`text-xs ${amPm === 'pm' ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}
//                   >
//                     pm
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="relative w-32 h-32 mx-auto mb-4">
//               <div className="absolute inset-0 rounded-full border-4 border-green-400 bg-white">
//                 {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
//                   <div
//                     key={num}
//                     className="absolute text-xs font-medium text-gray-700"
//                     style={{
//                       top: `${50 + 35 * Math.cos((index - 3) * Math.PI / 6)}%`,
//                       left: `${50 + 35 * Math.sin((index - 3) * Math.PI / 6)}%`,
//                       transform: 'translate(-50%, -50%)'
//                     }}
//                   >
//                     {num}
//                   </div>
//                 ))}
                
//                 <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-90"></div>
//                 <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gray-600 origin-bottom transform -translate-x-1/2 -translate-y-full"></div>
//                 <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//               </div>
//             </div>
//           </div>

//           <div className="flex-1">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Days</h3>
            
//             <div className="grid grid-cols-4 gap-3 mb-6">
//               {days.map((day) => (
//                 <button
//                   key={day}
//                   onClick={() => toggleDay(day)}
//                   className={`w-14 h-14 rounded-full text-xs font-medium transition-all duration-200 ${
//                     selectedDays.includes(day)
//                       ? day === 'Sat' ? 'bg-teal-500 text-white' : 'bg-teal-500 text-white'
//                       : 'bg-white border border-gray-200 text-gray-600 hover:border-teal-300'
//                   }`}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>

//             <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CompletionPage() {
//   const [activeItem, setActiveItem] = useState(1);
//   const [showTimerOverlay, setShowTimerOverlay] = useState(false);

//   const handleMenuClick = (itemId) => {
//     setActiveItem(itemId);
//     if (itemId === 6) {
//       setShowTimerOverlay(true);
//     }
//   };

//   const handleSetReminder = () => {
//     setShowTimerOverlay(true);
//   };

//   return (
//     <div
//       className="min-h-screen w-full relative overflow-hidden"
//       style={{ 
//         background: "linear-gradient(135deg, #8B9FF5 0%, #B8A4E8 20%, #E8B4F0 40%, #F5A4B8 60%, #A4C8FF 80%, #FFD4A3 100%)" 
//       }}>
      
//       <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg flex flex-col items-center py-6 z-10">
//         <div className="mb-8">
//           <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//         </div>

//         <div className="flex flex-col space-y-4 flex-1">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleMenuClick(item.id)}
//               className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
//                 activeItem === item.id
//                     ? "bg-emerald-500 text-white shadow-lg"
//                     : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {item.icon}
//             </button>
//           ))}
//         </div>

//         <div className="mt-8">
//           <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="absolute top-6 left-28 z-20">
//         <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           <span className="text-sm font-semibold">Back</span>
//         </button>
//       </div>

//       <div className="ml-20 min-h-screen flex items-center justify-center p-8">
//         <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl border border-white border-opacity-30">
//           <div className="mb-8 flex justify-center">
//             <div className="relative">
//               <img 
//                 src={avatarIcon} 
//                 alt="Avatar" 
//                 className="w-32 h-32 object-contain"
//               />
//               <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
//                 Day 1 to 14
//               </div>
//             </div>
//           </div>

//           <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
//             Great job completing your session!
//           </h1>
          
//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//             Want to make this a habit? Set a reminder for next time.
//           </p>

//           <div className="flex justify-center space-x-4 mb-8">
//             <button 
//               onClick={handleSetReminder}
//               className="bg-gray-100 text-gray-700 py-3 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
//             >
//               Set Reminder
//             </button>
//             <button className="bg-teal-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
//               View Analytics
//             </button>
//           </div>

//           <div className="text-left">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">My Recommendations</h2>
            
//             <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
//               <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
//                 <div className="text-green-600 mb-3">
//                   <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mb-2">5 habits to stay happy</p>
//                 <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
//                   <span>⏱</span>
//                   <span>Time</span>
//                   <span>💡</span>
//                   <span>Tips</span>
//                 </div>
//               </div>

//               <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
//                 <div className="text-yellow-600 mb-3">
//                   <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mb-2">5 habits to stay happy</p>
//                 <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
//                   <span>⏱</span>
//                   <span>Time</span>
//                   <span>💡</span>
//                   <span>Tips</span>
//                 </div>
//               </div>

//               <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 text-center">
//                 <div className="text-pink-600 mb-3">
//                   <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mb-2">9 habits to stay happy</p>
//                 <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
//                   <span>⏱</span>
//                   <span>Time</span>
//                   <span>💡</span>
//                   <span>Tips</span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <button className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
//                 Explore other features
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 right-8 opacity-60">
//         <div className="text-4xl">🌸</div>
//       </div>
      
//       <div className="absolute top-20 right-20 opacity-40">
//         <div className="text-2xl">✨</div>
//       </div>

//       <TimerOverlay 
//         isOpen={showTimerOverlay} 
//         onClose={() => setShowTimerOverlay(false)} 
//       />
//     </div>
//   );
// }

// export default CompletionPage;


import { useState } from "react";
import avatarIcon from "../assets/Group 1597881205.png";
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 2,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a1 1 0 01-2 2H10a2 2 0 01-2-2V6" />
      </svg>
    )
  },
  {
    id: 4,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 5,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 6,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 7,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 8,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 9,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
];

function TimerOverlay({ isOpen, onClose, onSave }) {
  const [selectedDays, setSelectedDays] = useState(['Sat']);
  const [hours, setHours] = useState('03');
  const [minutes, setMinutes] = useState('00');
  const [amPm, setAmPm] = useState('am');
   const navigate = useNavigate();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'All'];

  const toggleDay = (day) => {
    if (day === 'All') {
      if (selectedDays.includes('All')) {
        setSelectedDays([]);
      } else {
        setSelectedDays(['All']);
      }
    } else {
      if (selectedDays.includes('All')) {
        setSelectedDays([day]);
      } else {
        setSelectedDays(prev => 
          prev.includes(day) 
            ? prev.filter(d => d !== day)
            : [...prev, day]
        );
      }
    }
  };

  const handleSave = () => {
  onSave();
  onClose();

  // wait for 2 seconds (2000ms) before navigating
  setTimeout(() => {
    navigate('/finalpage');  
  }, 2000);
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-lg-shadow bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-[600px] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-semibold">Set Reminder</span>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex space-x-8">
          {/* Time Section */}
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <input 
                  type="text" 
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="text-3xl font-bold text-teal-600 bg-transparent border-none outline-none w-12 text-center"
                  maxLength="2"
                />
                <span className="text-3xl font-bold text-teal-600">:</span>
                <input 
                  type="text" 
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="text-3xl font-bold text-teal-600 bg-transparent border-none outline-none w-12 text-center"
                  maxLength="2"
                />
                <div className="ml-3 flex flex-col">
                  <button 
                    onClick={() => setAmPm('am')}
                    className={`text-sm ${amPm === 'am' ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}
                  >
                    am
                  </button>
                  <button 
                    onClick={() => setAmPm('pm')}
                    className={`text-sm ${amPm === 'pm' ? 'text-teal-600 font-semibold' : 'text-gray-400'}`}
                  >
                    pm
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-green-400 bg-white">
                {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
                  <div
                    key={num}
                    className="absolute text-xs font-medium text-gray-700"
                    style={{
                      top: `${50 + 35 * Math.cos((index - 3) * Math.PI / 6)}%`,
                      left: `${50 + 35 * Math.sin((index - 3) * Math.PI / 6)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {num}
                  </div>
                ))}
                
                <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-90"></div>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-gray-600 origin-bottom transform -translate-x-1/2 -translate-y-full"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Days Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Days</h3>
            
            <div className="grid grid-cols-4 gap-3 mb-6">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`w-12 h-12 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedDays.includes(day)
                      ? 'bg-teal-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-teal-300'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <button 
              onClick={handleSave}
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletionPage() {
  const [activeItem, setActiveItem] = useState(1);
  const [showTimerOverlay, setShowTimerOverlay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    if (itemId === 6) {
      setShowTimerOverlay(true);
    }
  };

  const handleSetReminder = () => {
    setShowTimerOverlay(true);
  };

  const handleSave = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #8B9FF5 0%, #B8A4E8 20%, #E8B4F0 40%, #F5A4B8 60%, #A4C8FF 80%, #FFD4A3 100%)" 
      }}>
      
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg flex flex-col items-center py-6 z-10">
        <div className="mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col space-y-4 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                activeItem === item.id
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-28 z-20">
        <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-semibold">Back</span>
        </button>
      </div>

      <div className="ml-20 min-h-screen flex items-center justify-center p-8">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl border border-white border-opacity-30">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={avatarIcon} 
                alt="Avatar" 
                className="w-32 h-32 object-contain"
              />
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Day 1 to 14
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Great job completing your session!
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Want to make this a habit? Set a reminder for next time.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <button 
              onClick={handleSetReminder}
              className="bg-gray-100 text-gray-700 py-3 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Set Reminder
            </button>
            <button className="bg-teal-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
              View Analytics
            </button>
          </div>

          <div className="text-left">
            <h2 className="text-xl font-bold text-gray-800 mb-6">My Recommendations</h2>
            
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                <div className="text-green-600 mb-3">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">5 habits to stay happy</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <span>⏱</span>
                  <span>Time</span>
                  <span>💡</span>
                  <span>Tips</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
                <div className="text-yellow-600 mb-3">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">5 habits to stay happy</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <span>⏱</span>
                  <span>Time</span>
                  <span>💡</span>
                  <span>Tips</span>
                </div>
              </div>

              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 text-center">
                <div className="text-pink-600 mb-3">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">9 habits to stay happy</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <span>⏱</span>
                  <span>Time</span>
                  <span>💡</span>
                  <span>Tips</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors">
                Explore other features
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 opacity-60">
        <div className="text-4xl">🌸</div>
      </div>
      
      <div className="absolute top-20 right-20 opacity-40">
        <div className="text-2xl">✨</div>
      </div>

      <TimerOverlay 
        isOpen={showTimerOverlay} 
        onClose={() => setShowTimerOverlay(false)}
        onSave={handleSave}
      />

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl transform animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Setted!</h2>
              <p className="text-gray-600">Your reminder has been set successfully.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompletionPage;