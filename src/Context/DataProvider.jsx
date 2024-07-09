import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    users: null,
    services: null,
    testimonials: null,
    clients: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, skillResponse, resumeResponse, testimonialsResponse,categoryResponse] = await Promise.all([
          axios.get("http://127.0.0.1:3000/api/users/user"),
          axios.get("http://127.0.0.1:3000/api/skills"),
          axios.get("http://127.0.0.1:3000/api/resume"),
          axios.get("http://127.0.0.1:3000/api/testimonials"),
          axios.get("http://127.0.0.1:3000/api/portfolio/category"),

        ]);

        setData({
          users: usersResponse.data.data,
          skills: skillResponse.data.data,
          resume: resumeResponse.data.data,
          testimonials: testimonialsResponse.data,
          category: categoryResponse.data.data,
        });
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
