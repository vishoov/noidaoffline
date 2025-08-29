import React, { createContext, useState, useEffect, useCallback } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// Mock user data for demonstration
const MOCK_USERS = [
  { 
    id: 1, 
    email: 'admin@example.com', 
    password: 'admin123', 
    name: 'John Admin',
    role: 'admin' 
  },
  { 
    id: 2, 
    email: 'user@example.com', 
    password: 'user123', 
    name: 'Jane User',
    role: 'user' 
  },
  { 
    id: 3, 
    email: 'demo@example.com', 
    password: 'demo123', 
    name: 'Demo User',
    role: 'user' 
  }
];

// AuthProvider component
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //functions that will be provided by the context
    useEffect(()=>{
        initializeAuth();
    }, []);


    //initalize Auth needs to be memoized 
    //useCallback function ko memoize karne ke liye use karte hain
    //memoization se ye hota hai ki function tabhi re-create hoga jab uske dependencies change hongi
    const initializeAuth = async ()=>{
        try{
                //first time jab bhi component load hoga tab ye check karega ki local storage me token hai ya nahi
                setLoading(true);
                setError(null);

//API Call delay
await new Promise(res => setTimeout(res, 1000));

                const savedUser = localStorage.getItem('auth_user');
                const token = localStorage.getItem('auth_token');

              
                    if(savedUser && token){
                        const userData = JSON.parse(savedUser);

                        //validate token 
                        if(isValidToken(token)){
                            setUser(userData);

                            return;
                        }else{
                            //invalid token 
                            localStorage.removeItem('auth_user');
                            localStorage.removeItem('auth_token');
                            setUser(null);

                            return;
                        }


        }
    }
        catch(err){
            console.error("Error during auth initialization:", err);
            setError("Failed to initialize authentication.");
        }
        finally{
            setLoading(false);
        }
    }

    const login = useCallback(async (email, password)=>{
        try{
            setLoading(true);
            setError(null);

            if(!email || !password){
                setLoading(false);
                throw new Error("Email and password are required");

            }

            const user = MOCK_USERS.find(u=> u.email.toLocaleLowerCase() === email.toLocaleLowerCase() && u.password === password);

            if(!user){
                setLoading(false);
                throw new Error("Invalid email or password");

            }

            const userData = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }

            const token = generateMockToken(userData);

            localStorage.setItem('auth_user', JSON.stringify(userData));
            localStorage.setItem('auth_token', token);

            setUser(userData);

            setLoading(false);
            return userData;

        }catch(err){
            console.error("Login error:", err);
            setError("Login failed. Please try again.");
        } finally{
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async ()=>{
        try{
            setUser(null);
            localStorage.removeItem('auth_user');
            localStorage.removeItem('auth_token');

            return true;
        }catch(err){
            console.error("Logout error:", err);
            setError("Logout failed. Please try again.");
            return false;
        } finally{
            setLoading(false);
        }
    }, [])

    return (
        <AuthContext.Provider value = {{user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Helper function to generate mock JWT token
const generateMockToken = (user) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({
    sub: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  }));
  const signature = btoa('mock-signature-' + Date.now());
  
  return `${header}.${payload}.${signature}`;
};

// Helper function to validate mock token
const isValidToken = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const payload = JSON.parse(atob(parts[1]));
    const now = Math.floor(Date.now() / 1000);
    
    // Check if token is expired
    return payload.exp > now;
  } catch {
    return false;
  }
};


// Export default
export { AuthContext };
export default AuthProvider;

