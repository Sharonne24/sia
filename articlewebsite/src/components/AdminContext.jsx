import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};
export const AdminProvider = ({ children }) => {
    const [adminToken, setAdminToken] = useState(null);
  