'use client';

import { Input } from '@/components/ui/input';

interface Props {
  term: string;
  setTerm: (term: string) => void;
}

export default function SearchBar(props: Props) {
  const { term, setTerm } = props;

  return (
    <div className="space-y-4 flex justify-center p-4">
      <Input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Buscar evento..."
        className="bg-background border rounded p-2 w-1/2"
      />
    </div>
  );
}
