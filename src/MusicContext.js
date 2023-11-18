// MusicContext.js
import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([]);

  const updateMusicData = (data) => {
    if (Array.isArray(data)) {
      setMusicData(data);
    } else {
      console.error('updateMusicData: data is not an array', data);
    }
  };

  return (
    <MusicContext.Provider value={{ musicData, updateMusicData }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
