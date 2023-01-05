import { useClerk } from '@clerk/clerk-react';
import { getSession } from 'next-auth/client';

function MyComponent() {
  const { isLoaded, session } = useClerk();

  // If session is not loaded, fetch it using NextAuth
  if (!isLoaded) {
    getSession().then((session) => {
      console.log(session);
    });
  }

  // If user is not authenticated, display a message
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return <div>Authenticated</div>;
}