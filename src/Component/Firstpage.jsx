// import { useState } from 'react';
// import angryFace from '/src/assets/Face.png';
// import sadFace from '/src/assets/Property 1=Default.png';
// import neutralFace from '/src/assets/Property 1=Default (1).png';
// import contentFace from '/src/assets/Property 1=Default (2).png';
// import happyFace from '/src/assets/Property 1=Default (3).png';
// import aweFace from '/src/assets/Property 1=Default (4).png';
// import { Link } from 'react-router-dom';

// const FeelingToday = () => {
//   const [selectedFeeling, setSelectedFeeling] = useState(null);

//   const feelings = [
//     { 
//       id: 'angry', 
//       label: 'Angry', 
//       image: angryFace 
//     },
//     { 
//       id: 'sad', 
//       label: 'Sad', 
//       image: sadFace 
//     },
//     { 
//       id: 'neutral', 
//       label: 'Neutral', 
//       image: neutralFace 
//     },
//     { 
//       id: 'content', 
//       label: 'Content', 
//       image: contentFace 
//     },
//     { 
//       id: 'happy', 
//       label: 'Happy', 
//       image: happyFace 
//     },
//     { 
//       id: 'awe', 
//       label: 'Awe', 
//       image: aweFace 
//     }
//   ];

//   return (
//     <div
//       className="min-h-screen w-full relative overflow-hidden"
//       style={{ 
//         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
//       }}
//     >
//       {/* Back button - positioned to avoid sidebar */}
//       <div className="absolute top-6 left-28 z-10 flex items-center">
//         <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
//           <span className="text-white text-lg font-bold">←</span>
//         </button>
//         <span className="ml-3 text-white text-sm font-medium">Back</span>
//       </div>

//       {/* Main content container - with left margin to avoid sidebar overlap */}
//       <div className="flex items-center justify-center min-h-screen p-4 pt-20 ml-20">
//         <div className="w-full max-w-4xl">
//           {/* Main content card with rectangular shape and proper transparency */}
//           <div 
//             className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30"
//             style={{
//               backgroundColor: 'rgba(255, 255, 255, 0.25)',
//               boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
//               backdropFilter: 'blur(8px)',
//               border: '1px solid rgba(255, 255, 255, 0.18)'
//             }}
//           >
//             {/* Header text */}
//             <div className="text-center mb-8">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 How are you feeling today?
//               </h1>
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed px-2">
//                 No matter how you're feeling, it's okay. We're here to support you.
//               </p>
//             </div>

//             {/* Feeling options grid - single row, 6 columns */}
//             <div className="grid grid-cols-6 gap-4 mb-8">
//               {feelings.map((feeling) => (
//                 <button
//                   key={feeling.id}
//                   onClick={() => setSelectedFeeling(feeling.id)}
//                   className={`flex flex-col items-center p-2 rounded-2xl transition-all duration-200 ${
//                     selectedFeeling === feeling.id
//                       ? 'bg-white/40 scale-105 shadow-lg border-2 border-white/50'
//                       : 'bg-white/20 hover:bg-white/30 hover:scale-102 border border-white/30'
//                   }`}
//                 >
//                   <div className="w-12 h-12 md:w-14 md:h-14 mb-2 rounded-full overflow-hidden bg-white/30 flex items-center justify-center">
//                     <img
//                       src={feeling.image}
//                       alt={feeling.label}
//                       className="w-10 h-10 md:w-12 md:h-12 object-contain"
//                     />
//                   </div>
//                   <span className="text-xs font-medium text-gray-800">
//                     {feeling.label}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* Instruction text */}
//             <div className="text-center mb-8">
//               <p className="text-gray-800 text-sm md:text-base font-medium">
//                 Choose the feeling that is closest to how you are feeling
//               </p>
//             </div>

//             {/* Complete button - inside the card */}
//             <div className="flex justify-center">
//               <Link to={`/emotion/${selectedFeeling}`}>
//               <button
//                 className={`px-12 py-4 rounded-2xl font-semibold text-white transition-all duration-200 ${
//                   selectedFeeling
//                     ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105'
//                     : 'bg-gray-400 cursor-not-allowed opacity-60'
//                 }`}
//                 disabled={!selectedFeeling}
//               >
//                 Complete
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-8 right-8 opacity-30">
//         <div className="w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
//       </div>
//       <div className="absolute top-1/4 left-1/3 opacity-20">
//         <div className="w-8 h-8 bg-white/10 rounded-full blur-lg"></div>
//       </div>
//       <div className="absolute bottom-1/4 right-1/4 opacity-25">
//         <div className="w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
//       </div>
//     </div>
//   );
// };

// export default FeelingToday;
import { useState } from 'react';
import angryFace from '/src/assets/Face.png';
import sadFace from '/src/assets/Property 1=Default.png';
import neutralFace from '/src/assets/Property 1=Default (1).png';
import contentFace from '/src/assets/Property 1=Default (2).png';
import happyFace from '/src/assets/Property 1=Default (3).png';
import aweFace from '/src/assets/Property 1=Default (4).png';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const feelings = [
    { 
      id: 'angry', 
      label: 'Angry', 
      image: angryFace 
    },
    { 
      id: 'sad', 
      label: 'Sad', 
      image: sadFace 
    },
    { 
      id: 'neutral', 
      label: 'Neutral', 
      image: neutralFace 
    },
    { 
      id: 'content', 
      label: 'Content', 
      image: contentFace 
    },
    { 
      id: 'happy', 
      label: 'Happy', 
      image: happyFace 
    },
    { 
      id: 'awe', 
      label: 'Awe', 
      image: aweFace 
    }
  ];

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
      }}
    >
      {/* Back button - positioned to avoid sidebar */}
      <div className="absolute top-6 left-28 z-10 flex items-center">
        <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
          <span className="text-white text-lg font-bold">←</span>
        </button>
        <span className="ml-3 text-white text-sm font-medium">Back</span>
      </div>

      {/* Main content container - with left margin to avoid sidebar overlap */}
      <div className="flex items-center justify-center min-h-screen p-4 pt-20 ml-20">
        <div className="w-full max-w-4xl">
          {/* Main content card with rectangular shape and proper transparency */}
          <div 
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            {/* Header text */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                How are you feeling today?
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed px-2">
                No matter how you're feeling, it's okay. We're here to support you.
              </p>
            </div>

            {/* Feeling options grid - single row, 6 columns */}
            <div className="grid grid-cols-6 gap-4 mb-8">
              {feelings.map((feeling) => (
                <button
                  key={feeling.id}
                  onClick={() => setSelectedFeeling(feeling.id)}
                  className={`flex flex-col items-center p-2 rounded-2xl transition-all duration-200 ${
                    selectedFeeling === feeling.id
                      ? 'bg-white/40 scale-105 shadow-lg border-2 border-white/50'
                      : 'bg-white/20 hover:bg-white/30 hover:scale-102 border border-white/30'
                  }`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 mb-2 rounded-full overflow-hidden bg-white/30 flex items-center justify-center">
                    <img
                      src={feeling.image}
                      alt={feeling.label}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-800">
                    {feeling.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Instruction text */}
            <div className="text-center mb-8">
              <p className="text-gray-800 text-sm md:text-base font-medium">
                Choose the feeling that is closest to how you are feeling
              </p>
            </div>

            {/* Complete button - inside the card */}
            <div className="flex justify-center">
              <Link to={`/emotion/${selectedFeeling}`}>
              <button
                className={`px-12 py-4 rounded-2xl font-semibold text-white transition-all duration-200 ${
                  selectedFeeling
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-400 cursor-not-allowed opacity-60'
                }`}
                disabled={!selectedFeeling}
              >
                Complete
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 right-8 opacity-30">
        <div className="w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/4 left-1/3 opacity-20">
        <div className="w-8 h-8 bg-white/10 rounded-full blur-lg"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-25">
        <div className="w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default FirstPage;