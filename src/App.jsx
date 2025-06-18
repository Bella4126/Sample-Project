import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Component/SideBar";
import Instructions from "./Component/Instructions";
import SecondPage from "./Component/SecondPage";
import ThirdPage from "./Component/ThirdPage";
import FourthPage from "./Component/FourthPage";
import FifthPage from "./Component/FifthPage";
import FinalPage from "./Component/FinalPage";
import FirstPage from "./Component/Firstpage";
import EmotionDetail from './Component/EmotionDetail';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/secondpage" element={<SecondPage />} />
            <Route path="/thirdpage" element={<ThirdPage />} />
            <Route path="/fourthpage" element={<FourthPage />} />
            <Route path="/fifthpage" element={<FifthPage />} />
            <Route path="/finalpage" element={<FinalPage />} />
            <Route path="/firstpage" element={<Firstpage />} />
            <Route path="/emotion/:emotionId" element={<EmotionDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

