import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};