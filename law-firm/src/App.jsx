

import './App.css'
import Header from './components/Header/Header';
import Block1 from './components/MidBlock/Block1';
import Block2 from './components/MidBlock/Block2';
import Block3 from './components/MidBlock/Block3';
import Block4 from './components/MidBlock/Block4';


function App() {

  return (
    <>
      <Header/>
      <div className="middlePortion">
          <Block1/>
          <Block2/>
          <Block3/>
          <Block4/>
      </div>
    </>
  )
}

export default App
