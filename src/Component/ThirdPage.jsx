import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ActivityTracker = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [showPopup, setShowPopup] = useState(false);
 const navigate = useNavigate();
  const activities = [
    'Exercise', 'Work', 'Social', 'Community', 'Events', 'Home',
    'Play', 'Sports', 'Arts', 'Cooking', 'Comparing', 'Music', 'Journal',
    'TV/ Show', 'Stretching', 'Called a loved one', 'Reading', 'Study',
    'Nature', 'Comedy', 'Hobbies', 'Playing with Pets', 'Treating Yourself',
    'Doom scrolling', 'Overworking', 'Substance Use', 'Comparing', 'Family'
  ];

  const moods = [
    { name: 'Annoyed' },
    { name: 'Fed up' }
  ];

  const handleSubmit = () => {
    setShowPopup(true);
    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
       navigate('/fourthpage');
    }, 3000);
  };

  const handleActivityClick = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter(a => a !== activity));
    } else if (selectedActivities.length < 5) {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const getActivityButtonStyle = (activity) => {
    const isSelected = selectedActivities.includes(activity);
    
    return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/30 ${
      isSelected 
        ? 'bg-white/30 text-gray-800 shadow-lg transform scale-105' 
        : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:shadow-md hover:transform hover:scale-105'
    }`;
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
      }}
    >
      {/* Main Content Container - offset by sidebar width */}
      <div className="ml-20 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <Link to="/secondpage">
            <span className="font-medium">Back</span>
            </Link>
          </button>
        
          
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
            <span className="font-medium">Skip</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-2xl">
            {/* Main Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                What did you do today?
              </h1>
              
              <p className="text-gray-700 text-center mb-8">
                Choose up to 5 activities
              </p>

              {/* Activities Grid */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {activities.map((activity, index) => (
                  <button
                    key={index}
                    onClick={() => handleActivityClick(activity)}
                    className={getActivityButtonStyle(activity)}
                    disabled={!selectedActivities.includes(activity) && selectedActivities.length >= 5}
                  >
                    {activity}
                  </button>
                ))}
              </div>

              {/* Mood Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Angry</h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    {moods.map((mood, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedMood(mood.name)}
                        className={`px-4 py-3 rounded-2xl transition-all duration-200 border border-white/30 ${
                          selectedMood === mood.name
                            ? 'bg-white/30 text-gray-800 shadow-lg transform scale-105'
                            : 'bg-white/10 text-gray-700 hover:bg-white/20 hover:shadow-md hover:transform hover:scale-105'
                        }`}
                      >
                        <span className="font-medium">{mood.name}</span>
                      </button>
                    ))}
                  </div>
                  <img 
                    src="/src/assets/Face.png" 
                    alt="Angry face"
                    className="w-12 h-12"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Complete Button */}
              <div className="text-center">
                <button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Popup */}
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
      </div>

      
    </div>
  );
};



export default ActivityTracker;