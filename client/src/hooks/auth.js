import {useState, useCallback, useEffect} from 'react';

export function useAuth() {
    const [token, setToken] = useState('');
    
    const login = useCallback(() => {
        setToken(token);
    }, [])
    
    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token')
    }, [])
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token)
        }
    }, [login])

    return {login, logout, token}
}