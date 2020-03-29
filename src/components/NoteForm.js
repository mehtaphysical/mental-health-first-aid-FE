import React from 'react';
import { useNoteForm } from '../hooks/useNoteForm';

export const NoteForm = () => {
  const { success, handleSubmit, title, setTitle, text, setText } = useNoteForm();
  
  return success ? (
    <section>
      <p>Note Created!</p>
    </section>
  ) : (
    <section>
      <form onSubmit={handleSubmit}>
        <label>When I feel
          <input required
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)} />
        </label>
        <br/>
        <p>What helps me is:</p>
        <label>
          <input
            type="text"
            value={text}
            onChange={({ target }) => setText(target.value)} />
        </label>
        <button>Add Note</button>
      </form>
    </section>
  )
}
