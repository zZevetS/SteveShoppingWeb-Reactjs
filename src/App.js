import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Electronic from "./Pages/Electronic/Electronic.jsx"
import Fashtion from "./Pages/Fashion/Fashtion.jsx";
import Account from "./Pages/Account/Account.jsx";
import Header from "./Pages/Header/Header.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="fashtion" element={<Fashtion/>}/>
              <Route path="electronic" element={<Electronic/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="account" element={<Account/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
