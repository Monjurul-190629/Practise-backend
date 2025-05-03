'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'user'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registrationData = {
      name,
      email,
      password,
      role,
    };

    console.log('Registering user:', registrationData);

    // You can replace this with a POST request to your backend
    // fetch('/api/register', { method: 'POST', body: JSON.stringify(registrationData) })
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'admin' | 'user')}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
