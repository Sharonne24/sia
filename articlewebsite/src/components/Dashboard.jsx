import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [websiteTraffic, setWebsiteTraffic] = useState(0);

  useEffect(() => {
    const updateTraffic = () => {
      setWebsiteTraffic((prevTraffic) => prevTraffic + 1);
    };

    // Simulate website traffic increase every 5 seconds
    const interval = setInterval(updateTraffic, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Website Traffic</h3>
        <p>Total Visitors: {websiteTraffic}</p>
      </div>
    </div>
  );
};

export default Dashboard;