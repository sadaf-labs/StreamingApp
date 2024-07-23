import React from 'react';
import * as serviceWorker from './serviceworker';
import "./App.scss";
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

serviceWorker.register();

export default App;
