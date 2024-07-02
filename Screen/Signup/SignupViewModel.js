import { useCallback } from 'react';
import { useAuth } from '../../Service/Auth/AuthContext';
import { Alert } from 'react-native';
import { getAuthErrorMessage } from '../../Service/Auth/Error/AuthErrorHandler';


export default SignupViewModel = () => {
  const { register } = useAuth();

  const handleRegister = useCallback(async (email, password) => {
    try {
      await register(email, password);
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error)
      console.log('Login failed:', error.code, errorMessage);
      Alert.alert('Error', errorMessage);
  }
  }, [register]);

  return {
    handleRegister
  };
}