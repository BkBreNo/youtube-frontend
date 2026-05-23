import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
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

function App() {

  return (
    <UserStorage>
      <VideoStorage>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div style={{ display: 'flex', width: '100%' }}>
              <Menu />
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
