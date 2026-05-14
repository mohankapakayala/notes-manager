import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import '../styles/NotesList.css';

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

interface NotesListProps {
  refreshTrigger?: number;
}

const NotesList: FC<NotesListProps> = ({ refreshTrigger }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'http://localhost:5000/api/notes';

  const fetchNotes = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Note[]>(API_URL);
      setNotes(response.data);
    } catch (err) {
      setError('Failed to fetch notes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [refreshTrigger]);

  const deleteNote = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      setError('Failed to delete note');
      console.error(err);
    }
  };

  if (loading && notes.length === 0) return <div className="notes-container"><p>Loading notes...</p></div>;
  if (error) return <div className="notes-container error"><p>{error}</p></div>;

  return (
    <div className="notes-container">
      <h2>My Notes</h2>
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet. Create one to get started!</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note: Note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>{new Date(note.created_at).toLocaleDateString()}</small>
              <button
                onClick={() => deleteNote(note.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
