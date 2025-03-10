import data from './data';
import { useState, useEffect } from 'react';
import { idfy } from './utils/helperFunctions';

export default function useLocalHook() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const existingData = localStorage.getItem('emploees');

    if (!existingData) {
      localStorage.setItem('emploees', JSON.stringify(idfy(data)));
      setStoredData(idfy(data));
    } else {
      const parsedData = JSON.parse(existingData);
      setStoredData(parsedData);
    }
  }, []);

  return { storedData, setStoredData };
}
