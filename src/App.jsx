import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Youtube from "./pages/youtube/Youtube";
import Discord from "./pages/discord/Discord";
import Socials from "./pages/socials/Socials";
import DocsHome from "./pages/docs/DocsHome";

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/discord' element={<Discord />} />
        <Route path='/socials' element={<Socials />} />
        <Route path='/docs/*' element={<DocsHome />} />
      </Routes>
    </div>
  );
}

export default App;
