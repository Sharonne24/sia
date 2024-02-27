import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [websiteTraffic, setWebsiteTraffic] = useState(0);

  useEffect(() => {
    const updateTraffic = () => {
      setWebsiteTraffic((prevTraffic) => prevTraffic + 1);
    };

    // Simulate website traffic increase every 5 seconds
    const interval = setInterval(updateTraffic, 5000);