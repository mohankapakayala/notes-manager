import { useState, FC } from 'react';
import './App.css';
import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';

const App: FC = () => {
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleNoteAdded = (): void => {
    setRefreshKey((prev: number) => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📝 Notes Manager</h1>
      </header>
      <main className="App-main">
        <AddNoteForm onNoteAdded={handleNoteAdded} />
        <NotesList refreshTrigger={refreshKey} />
      </main>
    </div>
  );
};

export default App;
