import React, { useEffect, useState } from 'react';
import './App.css';
import liff from '@line/liff';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId: '2000394175-m15NX6eP' });
        if (liff.isLoggedIn()) {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
        } else {
          liff.login();
        }
      } catch (error) {
        console.error('LIFF Initialization Error:', error.message);
      }
    };

    initializeLiff();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {profile ? (
          <div>
            <img src={profile.pictureUrl} alt="Profile" />
            <p>Name: {profile.displayName}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
