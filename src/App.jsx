import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import NavBar from "./components/core/NavBar";
import Youtube from "./pages/youtube/Youtube";
import Discord from "./pages/discord/Discord";
import Socials from "./pages/socials/Socials";

function App() {
  return (
    <div className='bg-zinc-900'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/discord' element={<Discord />} />
        <Route path='/socials' element={<Socials />} />
      </Routes>
    </div>
  );
}

export default App;
