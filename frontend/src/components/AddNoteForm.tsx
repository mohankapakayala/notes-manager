import React, { useState, FC, ChangeEvent } from 'react';
import axios from 'axios';
import '../styles/AddNoteForm.css';

interface AddNoteFormProps {
  onNoteAdded?: () => void;
}

const AddNoteForm: FC<AddNoteFormProps> = ({ onNoteAdded }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const API_URL = 'http://localhost:5000/api/notes';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post(API_URL, {
        title: title.trim(),
        content: content.trim(),
      });

      setTitle('');
      setContent('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      if (onNoteAdded) {
        onNoteAdded();
      }
    } catch (err) {
      setError('Failed to create note');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="Enter note title"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            placeholder="Enter note content"
            rows={6}
            disabled={loading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Note created successfully!</div>}

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Creating...' : 'Create Note'}
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
