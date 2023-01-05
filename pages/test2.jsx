import axios from 'axios';
import { useSession } from '@clerk/clerk-react';
import { useState } from 'react';

const EmailForm = () => {
  const { session } = useSession();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Send API call to NextAuth to trigger email API
      await axios.post('https://connnect.unlimitednow.site', {
        email: session.email,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Send Email'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default EmailForm;
