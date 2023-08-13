import React, { useEffect, useState } from 'react';
import './App.css';
import liff from '@line/liff';
import './output.css'

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
    <div className="mx-5">
      <div className='bg-slate-300 p-2'>
        
      </div>
    </div>
  );
}

export default App;
