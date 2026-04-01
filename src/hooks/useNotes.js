import { useState, useEffect, useCallback } from 'react';
import { getNotesFromStorage, saveNotesToStorage } from '../utils/storage';
import { generateId } from '../utils/helpers';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load notes from storage on mount
  useEffect(() => {
    const savedNotes = getNotesFromStorage();
    setNotes(savedNotes);
    setLoading(false);
  }, []);

  // Add new note
  const addNote = useCallback((title, content, color = 'yellow') => {
    const newNote = {
      id: generateId(),
      title,
      content,
      color,
      timestamp: Date.now(),
      isPinned: false,
    };
    
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes);
    return newNote;
  }, [notes]);

  // Delete note
  const deleteNote = useCallback((id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes);
  }, [notes]);

  // Update note
  const updateNote = useCallback((id, updates) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updates, timestamp: Date.now() } : note
    );
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes);
  }, [notes]);

  // Toggle pin
  const togglePin = useCallback((id) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      updateNote(id, { isPinned: !note.isPinned });
    }
  }, [notes, updateNote]);

  // Clear all notes
  const clearAllNotes = useCallback(() => {
    setNotes([]);
    saveNotesToStorage([]);
  }, []);

  return {
    notes,
    loading,
    addNote,
    deleteNote,
    updateNote,
    togglePin,
    clearAllNotes,
  };
};
