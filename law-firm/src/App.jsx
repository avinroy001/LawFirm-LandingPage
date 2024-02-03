

import './App.css'
import Header from './components/Header/Header';
import Block1 from './components/MidBlock/Block1';
import Block2 from './components/MidBlock/Block2';


function App() {

  return (
    <>
      <Header/>
      <div className="middlePortion">
          <Block1/>
          <Block2/>
      </div>
    </>
  )
}

export default App
