import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import angryFace from '/src/assets/Face.png';
import sadFace from '/src/assets/Property 1=Default.png';
import neutralFace from '/src/assets/Property 1=Default (1).png';
import contentFace from '/src/assets/Property 1=Default (2).png';
import happyFace from '/src/assets/Property 1=Default (3).png';
import aweFace from '/src/assets/Property 1=Default (4).png';

const EmotionDetail = () => {
  const { emotionId } = useParams();
  const [intensity, setIntensity] = useState(50);
  const [selectedStage, setSelectedStage] = useState('');

  const emotionData = {
    angry: {
      title: 'Anger is a complex emotion',
      image: angryFace,
      color: 'bg-red-500',
      sliderColor: 'bg-red-500',
      intensityLabels: { low: 'Slightly Angry', high: 'Very Angry' },
      stages: ['Irritated', 'Frustrated', 'Mad', 'Furious', 'Enraged', 'Livid']
    },
    sad: {
      title: 'Sadness is a complex emotion',
      image: sadFace,
      color: 'bg-blue-500',
      sliderColor: 'bg-blue-500',
      intensityLabels: { low: 'Slightly Sad', high: 'Very Sad' },
      stages: ['Down', 'Disappointment', 'Listless', 'Apathy', 'Disheartened', 'Depressed']
    },
    neutral: {
      title: 'Neutrality is a complex emotion',
      image: neutralFace,
      color: 'bg-teal-500',
      sliderColor: 'bg-teal-500',
      intensityLabels: { low: 'Slightly Neutral', high: 'Very Neutral' },
      stages: ['Blank', 'Apathetic', 'Detached', 'Good', 'Indifferent', 'Okay']
    },
    content: {
      title: 'Contentment is a complex emotion',
      image: contentFace,
      color: 'bg-orange-500',
      sliderColor: 'bg-orange-500',
      intensityLabels: { low: 'Slightly Content', high: 'Very Content' },
      stages: ['Calm', 'Settled', 'Okay', 'At Ease', 'Composed', 'Relieved']
    },
    happy: {
      title: 'Happiness is a complex emotion',
      image: happyFace,
      color: 'bg-green-500',
      sliderColor: 'bg-green-500',
      intensityLabels: { low: 'Slightly Happy', high: 'Very Happy' },
      stages: ['Cheerful', 'Warm', 'Playful', 'Amused', 'Lighthearted', 'Chipper']
    },
    awe: {
      title: 'Awe is a complex emotion',
      image: aweFace,
      color: 'bg-purple-500',
      sliderColor: 'bg-purple-500',
      intensityLabels: { low: 'Slightly Amazed', high: 'Very Amazed' },
      stages: ['Curious', 'Interested', 'Fascinated', 'Amazed', 'Astonished', 'Awestruck']
    }
  };

  const currentEmotion = emotionData[emotionId] || emotionData.neutral;

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
      }}
    >
      {/* Back button */}
      <Link to="/firstpage" >
      <div className="absolute top-6 left-28 z-10 flex items-center">
     
        <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
          <span className="text-white text-lg font-bold">←</span>
        </button>
        <span className="ml-3 text-white text-sm font-medium">Back</span>
      </div>
      </Link>

      {/* Main content container */}
      <div className="flex items-center justify-center min-h-screen p-4 pt-20 ml-20">
        <div className="w-full max-w-2xl">
          <div 
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {currentEmotion.title}
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Identifying your emotions is the first step to releasing them
              </p>
            </div>

            {/* Emotion face */}
            <div className="flex justify-center mb-8">
              <div className={`w-24 h-24 ${currentEmotion.color} rounded-full flex items-center justify-center shadow-lg p-2`}>
                <img
                  src={currentEmotion.image}
                  alt={emotionId}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Intensity slider */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <span>{currentEmotion.intensityLabels.low}</span>
                <span>{currentEmotion.intensityLabels.high}</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-white/30 rounded-full">
                  <div 
                    className={`h-2 ${currentEmotion.sliderColor} rounded-full transition-all duration-200`}
                    style={{ width: `${intensity}%` }}
                  ></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                  className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                />
                <div 
                  className="absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-1/2 transition-all duration-200"
                  style={{ left: `calc(${intensity}% - 8px)` }}
                ></div>
              </div>
            </div>

            {/* Stage question */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                What stage is your {emotionId} in?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {currentEmotion.stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedStage === stage
                        ? 'bg-white/60 text-gray-800 shadow-lg scale-105'
                        : 'bg-white/30 text-gray-700 hover:bg-white/40 hover:scale-102'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 justify-center">
                <Link to="/firstpage">
              <button className="px-8 py-3 bg-white/30 text-gray-800 rounded-2xl font-semibold hover:bg-white/40 transition-all duration-200 hover:scale-105">
                Add Emotion
              </button>
                </Link>
              <Link to="/secondpage">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Continue
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

export default EmotionDetail;