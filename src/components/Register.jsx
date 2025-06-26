// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Side - Welcome Section */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="max-w-lg text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-4">
              TODO
              <span className="text-blue-400">APP</span>
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          </div>
          
          <h2 className="text-3xl font-light text-gray-300 mb-6 leading-relaxed">
            Start Your Journey to
            <br />
            <span className="text-blue-400 font-medium">Better Organization</span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Join thousands of users who have transformed their productivity. 
            Create your account today and experience the power of organized living.
          </p>
          
          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-center text-gray-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center justify-center text-gray-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center justify-center text-gray-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span>Get Started in Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="w-full max-w-md">
          <form 
            onSubmit={handleRegister} 
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-gray-400">Join the productivity revolution</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  required
                  className="mt-1 rounded border-white/20 bg-white/5 text-blue-400 focus:ring-blue-400 focus:ring-offset-0" 
                />
                <span className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <a 
                  href="/login" 
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}