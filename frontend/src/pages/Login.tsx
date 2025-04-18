import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => login(data.email, data.password),
    onSuccess: (data) => {
      authLogin(data.data.user, data.data.token);
      navigate('/dashboard');
    },
    onError: (error: any) => {
      console.error('Login error:', error.response?.data?.message || 'An error occurred');
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1>Welcome back!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="UID"
              {...register('email')}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="auth-button"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? 'Logging in...' : 'Login'}
          </button>
          
          {loginMutation.isError && (
            <p className="error-message">
              {(loginMutation.error as any).response?.data?.message || 'An error occurred'}
            </p>
          )}
          
          <p className="auth-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;