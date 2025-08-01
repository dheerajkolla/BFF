import React, { useEffect, useState } from 'react';
function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(setMsg);
  }, []);
  return <div>{msg}</div>;
}
export default App;
