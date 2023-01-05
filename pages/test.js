import { Component, useContext } from 'react';
import { useClerk } from "@clerk/clerk-react";
import { NextAuthContext } from 'next-auth';

const MyComponent = () => {
  const { user, loading } = useClerk();
  const { setUser } = useContext(NextAuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    setUser(user);
  }

  return <p>User data: {JSON.stringify(user)}</p>;
}

export default MyComponent