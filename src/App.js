import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './containers/Intro';
import Route from './containers/Route';
import { useEffect } from 'react';
import Details from './containers/Details';
import Program from './containers/Program';
import Join from './containers/Join';
import Footer from './components/Footer';

function App() {

  const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  const url = 'https://iamjggrnaut.github.io/api/blt.json'

  const [state, setState] = useState()
  useEffect(() => {
    getData(url).then(data => setState(data))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Route state={state} />
      <Details state={state} />
      <Program state={state} />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
