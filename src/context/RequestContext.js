import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const initialData = [];

  const [myArray, setMyArray] = useState(() => {
    const storedData = localStorage.getItem('myArray');
    return storedData ? JSON.parse(storedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('myArray', JSON.stringify(myArray));
  }, [myArray]);

  const addItemToArray = (newItem) => {
	setMyArray(prevArray => {
	  if (!Array.isArray(prevArray)) {
		console.error("Previous array is not an array:", prevArray);
		return [];
	  }
	  return [...prevArray, newItem];
	});
  };

  const removeValueFromArray = (value) => {
    setMyArray(prevArray => prevArray.filter(item => {
        return item._id !== value;
      }));
  };

  const updateValueInArray = (id, updatedProperties) => {
    setMyArray(prevArray => prevArray.map(item => {
      if (item._id === id) {
        return { ...item, ...updatedProperties };
      }
      return item;
    }));
  };

  return (
    <MyContext.Provider value={{ myArray, addItemToArray, removeValueFromArray }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
