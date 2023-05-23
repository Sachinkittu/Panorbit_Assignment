// Import necessary dependencies
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Create a userContext object
export const userContext = createContext();
// Get user data from local storage
const dataArr = JSON.parse(localStorage.getItem("userData"));

// Create a UserProvider component
const UserProvider = ({ children }) => {
  // Set initial state for isLoading and users array
  const [isloading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // Function to get user data from API endpoint
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://panorbit.in/api/users.json");
      const userData = res.data.users;
      setIsLoading(false);
      setUsers(userData);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Call getData function on component mount using useEffect hook
  useEffect(() => {
    getData();
  }, []);

  // Pass users state, getData function, user data from local storage and isLoading state as values to userContext provider
  return (
    <userContext.Provider value={{ users, getData, dataArr, isloading }}>
      {children}
    </userContext.Provider>
  );
};

// Export UserProvider component
export default UserProvider;
