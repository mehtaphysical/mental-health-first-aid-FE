import React, { useState } from 'react';

export const SignUp = () => {
  const [userName, setUserName] = useState('');

  return (
    <section>
      <form>
        <label>Username: <input type="text" value={userName} onChange={({ target }) => setUserName(target.value)} /></label>
      </form>
    </section>
  );
}