import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import http from "../config/http";

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
          http.get("/api/users/user"),
          http.get("/api/skills"),
          http.get("/api/resume"),
          http.get("/api/testimonials"),
          http.get("/api/portfolio/category"),

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
