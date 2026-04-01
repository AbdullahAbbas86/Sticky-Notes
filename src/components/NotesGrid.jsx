import NoteCard from './NoteCard';
import { compareDate } from '../utils/helpers';

export const NotesGrid = ({ notes, onDelete, onUpdate, onPin }) => {
  if (!notes || notes.length === 0) {
    return (
      <div className="w-full px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[40vh] text-center">
          <div className="text-5xl sm:text-7xl mb-4">📝</div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary-800 mb-2">No Notes Yet</h2>
          <p className="text-primary-600 mb-3 text-sm sm:text-base">Create your first note above to get started!</p>
          <p className="text-xs sm:text-sm text-primary-400">Your notes will be saved automatically in your browser.</p>
        </div>
      </div>
    );
  }

  // Separate pinned and unpinned notes
  const pinnedNotes = notes.filter(note => note.isPinned).sort(compareDate);
  const unpinnedNotes = notes.filter(note => !note.isPinned).sort(compareDate);

  return (
    <div className="w-full px-4 py-6 sm:py-8 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-50/30">
      <div className="max-w-7xl mx-auto">
      {/* Pinned Notes Section */}
      {pinnedNotes.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4 flex items-center gap-2">
            <span className="text-accent-orange text-xl sm:text-2xl">📌</span> Pinned Notes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {pinnedNotes.map(note => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onPin={onPin}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Notes Section */}
      <div>
        {pinnedNotes.length > 0 && (
          <h2 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4">All Notes</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {unpinnedNotes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onPin={onPin}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotesGrid;
