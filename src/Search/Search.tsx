import React, { EventHandler } from 'react';
 
function App() {
  const [search, setSearch] = React.useState('');
 
  function handleChange(event:any) {
    setSearch(event.target.value);
  }
 
  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
 
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}



interface User {
  firstName: string;
  lastName: string;
}
interface Props {
  value: string;
  onChange: (event: any) => void;
  children: string;
  headers?: {};
  user?:User;
  other?: boolean;
}

const Search:React.FC<Props> = function ({ value, onChange, children}) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
 
export default App;