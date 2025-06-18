// const Instructions = () => {
//   return (
// <div className="h-screen w-full relative overflow-hidden"
//     style={{
//            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
//          }}>
      
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-10 left-10 w-20 h-20 opacity-30">
//           <svg viewBox="0 0 100 100" className="w-full h-full text-white">
//             <path d="M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" 
//                   fill="currentColor" />
//           </svg>
//         </div>
//         <div className="absolute bottom-20 right-20 w-16 h-16 opacity-25">
//           <svg viewBox="0 0 100 100" className="w-full h-full text-pink-300">
//             <path d="M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" 
//                   fill="currentColor" />
//           </svg>
//         </div>
//         <div className="absolute top-1/2 right-10 w-24 h-24 opacity-20">
//           <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-200">
//             <path d="M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" 
//                   fill="currentColor" />
//           </svg>
//         </div>
//       </div>

//       <div className="absolute top-6 left-6">
//         <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
//           <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </div>
//           <span className="font-medium">Back</span>
//         </button>
//       </div>

//       <div className="flex items-center justify-center min-h-screen p-4">

//         <div className="max-w-2xl w-full">
//           <img 
//             src="/src/assets/Frame 1597880706.png" 
//             alt="Instructions Frame" 
//             className="w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Instructions;





import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' }}>
      {/* Background elements … if you have them … */}

      {/* Back button … if you have it …*/}
      {/* … */}

      {/* Centered Image — max width and big */}
      <Link to="/firstpage">
        <div className="flex items-center justify-center min-h-screen p-4">
          <img
            src="/src/assets/Frame 1597880706.png"
            alt="Instructions Frame"
            className="w-full max-w-4xl h-auto rounded-md"
          />
        </div>
      </Link>
    </div>
  );
}

export default Instructions;
