import React from 'react';

const M_WelcomeBlock = ({ title }) => {
  const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return { date, time };
  };

  const { date, time } = getFormattedDateTime();

  return (
    <div className="M_WelcomeBlock">
      <h1 className="A_Text A_Text--heading">
        Hello,👋<br />
        glad to see you today!
      </h1>
      <div className="M_WelcomeBlock__date">
        <div className="A_Text A_Text--small" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default M_WelcomeBlock; 