import './App.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';

import { getCharacter } from './queries/swapi';

function App() {
  const [id, setId] = useState('1');

  const query = useQuery({
    queryKey: ['character', id],
    queryFn: (ctx) => getCharacter(ctx.queryKey[1]) }
  )
  const data = query.data;

  if (data) {
    return (
      <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <p>Name = {data.name}</p>
        <p>Birth year = {data.birth_year}</p>
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default App
