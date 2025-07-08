import logo from './logo.svg';
import './App.css';
import SystemStatus from './systemstatus';
import JenkinsStatus from './JenkinsStatus';function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>🚀 Jenkins Tharunn Test Project - Build 6 aws</h1>
        <p>Testing Jenkins CI/CD with Auto-Monitoring</p><div style={{background: '#e8f5e8', padding: '15px', borderRadius: '8px', margin: '15px', border: '2px solid #28a745'}}><h3 style={{color: '#28a745', margin: '0 0 10px 0'}}>🤖 Jenkins Automation Status</h3><p style={{margin: '5px 0'}}><strong>Build Number:</strong> 19</p><p style={{margin: '5px 0'}}><strong>Deploy Time:</strong> 2025-07-05 19:07:30</p><p style={{margin: '5px 0', fontSize: '14px', color: '#666'}}>✅ This section was automatically added by Jenkins</p></div>
        
        {/* Add the system status component */}
        <SystemStatus />
        <JenkinsStatus />        
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