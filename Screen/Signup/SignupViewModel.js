import { useCallback } from 'react';
import { useAuth } from '../../Service/Auth/AuthContext';

export default SignupViewModel = () => {
  const { register } = useAuth();

  const handleRegister = useCallback(async (email, password) => {
    try {
      await register(email, password);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  }, [register]);

  return {
    handleRegister
  };
}