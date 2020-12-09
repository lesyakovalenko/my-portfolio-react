import React from 'react';
import './App.css';
import {Header} from "./Header";
import {ShowFileComponent} from "./workWithFile/File";
function App() {
  return (
    <div className="App">
     <div>
         <Header/>
     </div>
        <div>
            Main
            <ShowFileComponent/>
        </div>
    </div>
  );
}

export default App;
