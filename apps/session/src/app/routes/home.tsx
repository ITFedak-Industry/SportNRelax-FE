import { useState } from 'react';
import Button from '@mui/material/Button';

import { MainPage } from '@src/pages/main';

// eslint-disable-next-line import/no-default-export
export default function App() {
  const [name, setName] = useState('asdf');
  return (
    <>
      <p className="text-3xl font-bold underline">Hello world! {name}</p>
      <MainPage />
      <Button variant="contained">Hello world</Button>
    </>
  );
}
