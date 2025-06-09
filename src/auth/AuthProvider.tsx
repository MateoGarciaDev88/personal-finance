import { createContext, FC, useContext, useEffect, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
});


const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   return (
//     <AuthContext.Provider value={{ isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;