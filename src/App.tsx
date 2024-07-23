import React from 'react';
import "./App.scss";
import Home from './pages/Home';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/error/error-boundary';
import { register, unregister } from './serviceworker';


const App: React.FC = () => {

  React.useEffect(() => {
    register();

    return () => {
      unregister();
    };
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack} >
      <div className="App">
        <Home />
      </div>
    </ErrorBoundary>
  );
};


export default App;
