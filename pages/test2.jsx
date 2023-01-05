import axios from 'axios';
import { useSignIn } from '@clerk/nextjs';
import { useState } from 'react';

const SignUpForm = () => {
  const { signUp } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signUp.create({
        email,
        password,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign Up'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUpForm
