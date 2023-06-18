import HomeLayout from '@layouts/HomeLayout';
import { useEffect } from 'react';
import { makeServer } from '@config/miragejs/server';

function App() {
  /* Initializing MirageJS only in development environment. */

  if (import.meta.env.DEV) {
    makeServer();
  }

  useEffect(() => {
    fetch('/v1/projects/');
  }, []);

  return (
    <>
      <HomeLayout />
    </>
  );
}

export default App;
