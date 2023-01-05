import axios from 'axios';
import { useClerk } from '@clerk/clerk-react';

function RegisterForm() {
  const { createMagicLink } = useClerk();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [magicLink, setMagicLink] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Register user with NextAuth
      await axios.post('/api/register', { email });

      // Create magic link
      const link = await createMagicLink({ email });
      setMagicLink(link);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {magicLink ? (
        <a href={magicLink}>
          <button>Sign In</button>
        </a>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Register'}
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
    </>
  );
}

export default RegisterForm