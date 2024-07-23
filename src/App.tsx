import React from 'react';
import * as serviceWorker from './serviceworker';
import "./App.scss";
import Home from './pages/Home';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/error/error-boundary';


const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack} >
      <div className="App">
        <Home />
      </div>
    </ErrorBoundary>
  );
};

serviceWorker.register();

export default App;
