import { useNotes } from './hooks/useNotes';
import NoteCreator from './components/NoteCreator';
import NotesGrid from './components/NotesGrid';
import Footer from './components/Footer';

function App() {
  const { notes, loading, addNote, deleteNote, updateNote, togglePin, clearAllNotes } = useNotes();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="text-center">
          <div className="inline-block animate-bounce-gentle mb-4">
            <div className="text-5xl">📝</div>
          </div>
          <p className="text-primary-600 font-semibold">Loading your notes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-x-hidden">
      <div className="sticky top-0 z-50 w-full">
        <NoteCreator onAddNote={addNote} />
      </div>
      <main className="flex-grow w-full pt-2 sm:pt-3">
        <NotesGrid
          notes={notes}
          onDelete={deleteNote}
          onUpdate={updateNote}
          onPin={togglePin}
        />
      </main>
      <footer className="w-full mt-6 sm:mt-8">
        <Footer totalNotes={notes.length} onClearAll={clearAllNotes} />
      </footer>
    </div>
  );
}

export default App;
