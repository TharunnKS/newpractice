import logo from './logo.svg';
import './App.css';
import SystemStatus from './systemstatus';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jenkins Test Project</h1>
        <p>Testing Jenkins CI/CD with Auto-Monitoring</p>
        
        {/* Add the system status component */}
        <SystemStatus />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;