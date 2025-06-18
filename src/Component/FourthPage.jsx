import { useState } from 'react';
import angryFace from '/src/assets/Face.png';
import neutralFace from '/src/assets/Property 1=Default (1).png';
import sadFace from '/src/assets/Property 1=Default.png';

import { useNavigate } from 'react-router-dom';

const EmotionPage = () => {
  const [textInput, setTextInput] = useState('');
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const emotionTags = [
    { id: 'annoyed', label: 'Annoyed' },
    { id: 'fed-up', label: 'Fed up' },
    { id: 'tired', label: 'Tired' },
    { id: 'feel-up', label: 'Feel up' },
    { id: 'tired-2', label: 'Tired' },
    { id: 'fed-up-2', label: 'Fed up' }
  ];

  const selectedFeelings = [
    { id: 'angry', image: angryFace, label: 'Angry' },
    { id: 'neutral', image: neutralFace, label: 'Neutral' },
    { id: 'sad', image: sadFace, label: 'Sad' }
  ];

  const toggleEmotion = (emotionId) => {
    setSelectedEmotions(prev => 
      prev.includes(emotionId) 
        ? prev.filter(id => id !== emotionId)
        : [...prev, emotionId]
    );
  };

  const handleComplete = () => {
    if (textInput.trim() || selectedEmotions.length > 0) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setTextInput('');
        setSelectedEmotions([]);
          navigate('/fifthpage');  
      }, 2000);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
      }}
    >
      
      {/* Main content container */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 ml-20">
        <div className="w-full max-w-2xl">
          
          {/* Main card */}
          <div 
            className="backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Main question */}
            <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              What is making you feel this way?
            </h1>

            {/* Large text input area */}
            <div className="relative mb-8">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="I feel this way because..."
                className="w-full h-48 p-6 bg-transparent rounded-2xl border border-gray-500 text-gray-800 placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-base"
              />
              
              {/* Image icon in textarea */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-transparent rounded-md flex items-center justify-center hover:bg-gray-100/20 transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </button>
            </div>

            {/* Selected feelings and emotion tags section */}
            <div className="space-y-4">
              {/* Selected feelings display */}
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">Angry • Neutral • Sad</span>
                <div className="flex items-center space-x-2">
                  {selectedFeelings.map((feeling) => (
                    <div key={feeling.id}>
                      <img
                        src={feeling.image}
                        alt={feeling.label}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Emotion tags */}
              <div className="flex flex-wrap gap-2">
                {emotionTags.map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => toggleEmotion(emotion.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      selectedEmotions.includes(emotion.id)
                         ? 'bg-white/30 text-gray-800 shadow-lg transform scale-105' 
        : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:shadow-md hover:transform hover:scale-105'
                    }`}
                  >
                    {emotion.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Complete button */}
          <div className="flex justify-center pt-8">
            <button
              onClick={handleComplete}
              className={`px-16 py-4 rounded-2xl font-semibold text-white transition-all duration-200 shadow-lg ${
                textInput.trim() || selectedEmotions.length > 0
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-400 cursor-not-allowed opacity-60'
              }`}
              disabled={!textInput.trim() && selectedEmotions.length === 0}
            >
              Complete
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl transform animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Submitted!</h2>
              <p className="text-gray-600">Your response has been recorded successfully.</p>
            </div>
          </div>
        </div>
      )}

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

export default EmotionPage;