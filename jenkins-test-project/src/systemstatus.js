import React, { useState, useEffect } from 'react';

function SystemStatus() {
  const [diskSpace, setDiskSpace] = useState('Checking...');
  const [lastCleanup, setLastCleanup] = useState('Never');
  const [buildStatus, setBuildStatus] = useState('Unknown');

  useEffect(() => {
    // Simulate system monitoring
    const checkSystem = () => {
      // Simulate disk space check
      const freeSpace = Math.floor(Math.random() * 10) + 2; // 2-12 GB
      setDiskSpace(`${freeSpace} GB free`);
      
      // Simulate build status
      setBuildStatus('✅ Last build: Success');
      
      // Update timestamp
      setLastCleanup(new Date().toLocaleTimeString());
    };

    checkSystem();
    const interval = setInterval(checkSystem, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: '#f0f0f0',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      border: '2px solid #007acc'
    }}>
      <h2>🖥️ System Monitor (Jenkins Integration Demo)</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <strong>💾 Disk Space:</strong><br />
          {diskSpace}
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <strong>🔧 Jenkins Status:</strong><br />
          {buildStatus}
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <strong>🧹 Last Check:</strong><br />
          {lastCleanup}
        </div>
      </div>
      <div style={{ marginTop: '15px', padding: '10px', background: '#e8f5e8', borderRadius: '5px' }}>
        <strong>ℹ️ Jenkins Auto-Cleanup:</strong> Monitoring disk space every 5 minutes. 
        Will automatically clean up old files when space gets low.
      </div>
    </div>
  );
}

export default SystemStatus;