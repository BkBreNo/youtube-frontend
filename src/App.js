import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import You from "./pages/you";
import History from "./pages/history";
import { UserStorage } from "./contexts/UserContext";
import { VideoStorage } from "./contexts/VideoContext";
import Login from "./pages/login";
import Register from "./pages/register";
import CreateVideo from "./pages/createVideo";
import Results from "./pages/results";
import Watch from "./pages/watchVideo";
import MiniGuide from "./components/miniGuide";
import Guide from "./components/Guide";

function App() {

  return (
    <UserStorage>
      <VideoStorage>
        <BrowserRouter>
          <div className="App">
            <Guide />
            <Header />
            <div style={{ display: 'flex', width: '100%' }}>
              <MiniGuide />
              <div style={{ flex: 1, minWidth: 0, }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shorts" element={<Shorts />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />
                  <Route path="/feed/you" element={<You />} />
                  <Route path="/feed/history" element={<History />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/createVideo" element={<CreateVideo />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/watch" element={<Watch />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </VideoStorage>
    </UserStorage>
  );
}

export default App;
