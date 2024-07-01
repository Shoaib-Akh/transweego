// src/App.js

import './App.scss';
import { WebsiteRoute } from './routes/WebsiteRoute';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <div className="App">
      <WebsiteRoute/>
      <AuthRoute/>
    </div>
  );
}

export default App;
