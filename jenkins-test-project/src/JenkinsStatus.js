import React from 'react';

function JenkinsStatus() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #007bff, #0056b3)',
      color: 'white',
      padding: '20px',
      margin: '20px auto',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '500px'
    }}>
      <h3>🎯 Jenkins Live Automation</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '15px',
        flexWrap: 'wrap'
      }}>
        <div style={{margin: '5px'}}>
          <strong>Build #19</strong>
        </div>
        <div style={{margin: '5px'}}>
          <strong>2025-07-05 19:07:30</strong>
        </div>
      </div>
      <p style={{margin: '15px 0 0 0', fontSize: '14px', opacity: '0.9'}}>
        Automatically deployed by Jenkins CI/CD Pipeline testing aws 1:16
      </p>
    </div>
  );
}

export default JenkinsStatus;
