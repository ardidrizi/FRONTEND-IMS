import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Mock form submission
    console.log('Sign up successful:', formData);
    setError('');
    alert('Account created successfully!');
    navigate('/admin/login'); // Redirect to Login page after signup
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://voss-photography.com/wp-content/uploads/2016/09/berlin-skyline-sonnenuntergang-molecule-man.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Transparent Card */}
      <div className="max-w-md w-full p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-[#199aaf] mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#199aaf] text-white rounded-full hover:bg-[#3ed7d7] transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-[#199aaf]">
          Already have an account?{' '}
          <a href="/admin/login" className="text-[#3ed7d7] hover:text-[#199aaf] transition-all">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
