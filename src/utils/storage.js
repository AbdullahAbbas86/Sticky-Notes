// Local Storage Management
const STORAGE_KEY = 'sticky_notes_app';

export const getNotesFromStorage = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

export const saveNotesToStorage = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const deleteFromStorage = (id) => {
  try {
    const notes = getNotesFromStorage();
    const updated = notes.filter(note => note.id !== id);
    saveNotesToStorage(updated);
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
  }
};

export const updateNoteInStorage = (id, updatedNote) => {
  try {
    const notes = getNotesFromStorage();
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes[index] = { ...notes[index], ...updatedNote };
      saveNotesToStorage(notes);
    }
  } catch (error) {
    console.error('Error updating note in localStorage:', error);
  }
};
