import React from 'react';

const App = () => {
  return (
    <>
      <h1>hellppp world</h1>
      <button
        type="button"
        onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}
      >
        Notify
      </button>
    </>
  );
};

export default App;
