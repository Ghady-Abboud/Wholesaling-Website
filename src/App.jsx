import './App.css'
import FirstSection from './components/first.jsx';
import FourthSection from './components/fourth.jsx';
import NavTop from "./components/nav-top.jsx";
import SecondSection from './components/second.jsx';
import ThirdSection from './components/third.jsx';

function App() {

  return (
    <>
    <div className="main-wrapper">
    <NavTop />
    <FirstSection />
    </div>
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    </>
  )
}

export default App
