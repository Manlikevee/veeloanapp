import React from 'react';
import { UserProvider } from './src/components/UserContext';

export const wrapRootElement = ({ element }) => (
  <UserProvider>
    {element}
  </UserProvider>
);
