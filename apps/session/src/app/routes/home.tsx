import { useState } from 'react';

// eslint-disable-next-line import/no-default-export
export default function App() {
  const [name, setName] = useState('asdf');
  return <p className="text-3xl font-bold underline">Hello world! {name}</p>;
}
