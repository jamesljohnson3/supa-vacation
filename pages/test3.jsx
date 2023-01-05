import axios from 'axios';
import { useSession } from '@clerk/clerk-react';
import { useState } from 'react';

const MagicLinkButton = () => {
  const { session } = useSession();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [magicLink, setMagicLink] = useState('');

  async function handleClick(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Send API call to NextAuth to get magic link
      const response = await axios.post('/api/auth/magic-link', {
        email: session.email,
      });
      setMagicLink(response.data.magicLink);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {magicLink ? (
        <a href={magicLink}>Click here to log in</a>
      ) : (
        <button type="button" onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Magic Link'}
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MagicLinkButton;
