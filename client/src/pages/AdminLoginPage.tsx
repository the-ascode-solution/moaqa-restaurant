import { useState } from 'react';
import { useLocation } from 'wouter';
import AdminLogin from '@/components/AdminLogin';

export default function AdminLoginPage() {
  const [, setLocation] = useLocation();

  const handleLogin = async (data: { username: string; password: string }) => {
    // todo: remove mock functionality - replace with actual API call
    console.log('Login attempt:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login - in real app, this would validate credentials
    localStorage.setItem('adminAuth', 'true');
    setLocation('/admin/dashboard');
  };

  return <AdminLogin onLogin={handleLogin} />;
}
