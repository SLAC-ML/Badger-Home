import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = "https://xopt-org.github.io/Badger/";
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>We've Moved!</h1>
      <p>Please visit our new website:</p>
      <p><a href="https://xopt-org.github.io/Badger/">https://xopt-org.github.io/Badger/</a></p>
    </div>
  );
}
