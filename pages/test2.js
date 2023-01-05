import { withNextAuth } from 'next-auth';
import { useClerk } from 'clerk/react';

const MyComponent = () => {
  const { user, loading } = useClerk();
  const { setUser } = useContext(NextAuthContext);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      setUser(user);
    }
  }, [user, loading, setUser]);

  return <p>Logged in as: {user?.email}</p>;
}

export default withNextAuth(MyComponent);
