

import './App.css'
// import Accordian from './components/Accordian/Accordian';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Block1 from './components/MidBlock/Block1';
import Block2 from './components/MidBlock/Block2';
import Block3 from './components/MidBlock/Block3';
import Block4 from './components/MidBlock/Block4';
import Block5 from './components/MidBlock/Block5';
import Block6 from './components/MidBlock/Block6';
import Block7 from './components/MidBlock/Block7';


function App() {

  return (
    <>
      <Header/>
      <div className="middlePortion">
          <Block1/>
          <Block2/>
          <Block3/>
          <Block4/>
          <Block5/>
          <Block6/>
          <Block7/>
      </div>
      <Footer/>
    </>
  )
}

export default App
