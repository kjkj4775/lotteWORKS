import React from 'react';
import logo from './logo.svg';
import './App.css';
import LTheader from "./LTheader/LTheader";
import LTcontainer from "./LTcontainer/LTcontainer";
import LTlab from "./LTlab/LTlab";
import LTgallery from "./LTgallery/LTgallery";
import LTmagazine from "./LTmagazine/LTmagazine";
import LTbrand from "./LTbrand/LTbrand";
import LTwedding from "./LTwedding/LTwedding";
import LTmvg from "./LTmvg/LTmvg";
import LTchannel from "./LTchannel/LTchannel";
import LTsangdam from "./LTsangdam/LTsangdam";
import LTfooter from "./LTfooter/LTfooter";

function App() {
  return (
    <div className="App">
        <LTheader />
        <LTcontainer />
        <LTlab/>
        <LTgallery/>
        <LTmagazine/>
        <LTbrand/>
        <LTwedding/>
        <LTmvg/>
        <LTchannel/>
        <LTsangdam/>
        <LTfooter/>
    </div>
  );
}

export default App;