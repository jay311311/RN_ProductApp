import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../Service/Auth/AuthContext';
import { getAuthErrorMessage } from '../../Service/Error/AuthErrorHandler';

export default LoginViewModel = () => {
    const { login, logout, loginWithGoogle } = useAuth();

    const handleLogin = useCallback(async (email, password) => {
        try {
            await login(email, password);
        } catch (error) {
            const errorMessage = getAuthErrorMessage(error)
            console.log('Login failed:', error.code, errorMessage);
            Alert.alert('Error', errorMessage);
        }
    }, [login]);

    const handleLoginWithGoogle = useCallback(async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.log('googleLogin failed:', error);
        }
    }, [loginWithGoogle]);

    const handleLogout = useCallback(async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    }, [logout]);

    return {
        handleLogin,
        handleLogout,
        handleLoginWithGoogle,
    };
};