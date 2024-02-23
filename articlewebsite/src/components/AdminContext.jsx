import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};
export const AdminProvider = ({ children }) => {
    const [adminToken, setAdminToken] = useState(null);

    const login = (token) => {
        // Implement secure storage of the token, such as in an HTTP-only cookie
        setAdminToken(token);
      };

      const logout = () => {
        // Implement secure removal of the token
        setAdminToken(null);
      };

      return (
        <AdminContext.Provider value={{ adminToken, login, logout }}>
          {children}
        </AdminContext.Provider>
      );
    };

    export default AdminContext;