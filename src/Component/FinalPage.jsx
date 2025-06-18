import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MoodCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get current month info
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Create calendar grid
  const calendarDays = [];
  
  // Previous month's trailing days
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Convert Sunday=0 to Monday=0
  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true
    });
  }
  
  // Current month days
  for (let date = 1; date <= daysInMonth; date++) {
    calendarDays.push({
      date,
      isCurrentMonth: true,
      isPrevMonth: false
    });
  }
  
  // Next month's leading days
  const remainingCells = 42 - calendarDays.length; // 6 rows × 7 days
  for (let date = 1; date <= remainingCells; date++) {
    calendarDays.push({
      date,
      isCurrentMonth: false,
      isPrevMonth: false
    });
  }

  // Random colors for mood representation
  const getRandomMoodColor = (date) => {
    const colors = [
      'bg-red-400', 'bg-blue-500', 'bg-cyan-400', 'bg-green-400', 
      'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-orange-400',
      'bg-indigo-400', 'bg-teal-400'
    ];
    return colors[date % colors.length];
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const moodFaces = [
    { name: 'Terrible', image: '/src/assets/Face.png', color: 'bg-red-500' },
    { name: 'Down', image: '/src/assets/Property 1=Default.png', color: 'bg-blue-600' },
    { name: 'Puzzled', image: '/src/assets/Property 1=Default (1).png', color: 'bg-cyan-400' },
    { name: 'Affectionate', image: '/src/assets/Property 1=Default (2).png', color: 'bg-yellow-400' },
    { name: 'Joyful', image: '/src/assets/Property 1=Default (3).png', color: 'bg-green-500' },
    { name: 'Amazed', image: '/src/assets/Property 1=Default (4).png', color: 'bg-purple-500' },
  ];

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)' 
      }}
    >
      {/* Main content container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Calendar container with glassmorphism effect */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            {/* Calendar header */}
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={() => navigateMonth(-1)}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <h2 className="text-2xl font-bold text-white">
                {monthNames[month]} {year}
              </h2>
              
              <button 
                onClick={() => navigateMonth(1)}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Week days header */}
            <div className="grid grid-cols-7 gap-3 mb-6">
              {weekDays.map((day, index) => (
                <div 
                  key={index} 
                  className="text-center text-white/90 font-semibold text-base py-3"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-3 mb-8">
              {calendarDays.map((day, index) => {
                const isSelected = selectedDate === day.date && day.isCurrentMonth;
                const dayKey = `${day.date}-${day.isCurrentMonth ? 'current' : day.isPrevMonth ? 'prev' : 'next'}`;
                
                return (
                  <button
                    key={dayKey}
                    onClick={() => day.isCurrentMonth && setSelectedDate(day.date)}
                    disabled={!day.isCurrentMonth}
                    className={`
                      w-12 h-12 rounded-full font-bold text-base
                      transition-all duration-200 hover:scale-110
                      shadow-lg hover:shadow-xl
                      ${!day.isCurrentMonth 
                        ? 'bg-white/20 text-white/40 cursor-not-allowed' 
                        : isSelected 
                          ? 'bg-gray-400 text-white shadow-xl ring-2 ring-white/50' 
                          : `${getRandomMoodColor(day.date)} text-white hover:brightness-110`
                      }
                    `}
                  >
                    {day.date}
                  </button>
                );
              })}
            </div>

            {/* Mood faces section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-6 gap-4">
                {moodFaces.map((mood, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-all duration-200 mb-3">
                      <img 
                        src={mood.image} 
                        alt={mood.name}
                        className="w-12 h-12 object-contain"
                      />
                    </button>
                    <span className="text-xs text-white/90 font-medium text-center">
                      {mood.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side indicators (like in the original) */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            <div className="w-2 h-8 bg-white/30 rounded-full"></div>
            <div className="text-xs text-white/60 transform rotate-90 origin-center whitespace-nowrap">
              High
            </div>
            <div className="w-2 h-16 bg-gradient-to-b from-white/50 to-white/20 rounded-full"></div>
            <div className="text-xs text-white/60 transform rotate-90 origin-center whitespace-nowrap">
              Medium
            </div>
            <div className="w-2 h-8 bg-white/20 rounded-full"></div>
            <div className="text-xs text-white/60 transform rotate-90 origin-center whitespace-nowrap">
              Low
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="fixed bottom-4 right-4">
            <div className="w-8 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodCalendar;