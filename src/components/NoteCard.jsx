import { Trash2, Pin, Copy, Edit2, X } from 'lucide-react';
import { useState } from 'react';
import { getColorClass, formatDate } from '../utils/helpers';

export const NoteCard = ({ note, onDelete, onUpdate, onPin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const [showActions, setShowActions] = useState(false);

  const colorClass = getColorClass(note.color);

  const handleSaveEdit = () => {
    if (editTitle.trim() || editContent.trim()) {
      onUpdate(note.id, {
        title: editTitle || 'Untitled',
        content: editContent,
      });
      setIsEditing(false);
    }
  };

  const handleCopy = async () => {
    const text = `${note.title}\n${note.content}`;
    try {
      await navigator.clipboard.writeText(text);
      alert('Note copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCancel = () => {
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`p-4 sm:p-5 md:p-6 rounded-xl border-2 ${colorClass.border} ${colorClass.bg} animate-scale-in shadow-soft hover:shadow-medium transition-shadow`}>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Title"
          className="w-full text-base sm:text-lg font-semibold text-primary-900 bg-transparent placeholder-primary-400 focus:outline-none mb-3 transition-colors"
          maxLength={50}
          autoFocus
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          placeholder="Content"
          className="w-full h-20 sm:h-24 text-sm sm:text-base text-primary-700 bg-transparent placeholder-primary-400 focus:outline-none resize-none mb-4 transition-colors"
          maxLength={500}
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm text-primary-600 hover:bg-white hover:bg-opacity-50 rounded-lg transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 text-sm bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-lg font-medium hover:shadow-md transition-all"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative p-4 sm:p-5 md:p-6 rounded-xl border-2 ${colorClass.border} ${colorClass.bg} animate-scale-in shadow-soft hover:shadow-medium transition-all group cursor-default`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Pin Badge */}
      {note.isPinned && (
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-accent-orange rounded-full" title="Pinned" />
      )}

      {/* Title */}
      <h3 className="font-semibold text-primary-900 line-clamp-2 mb-2 pr-8 text-base sm:text-lg">
        {note.title}
      </h3>

      {/* Content */}
      <p className="text-primary-600 text-xs sm:text-sm line-clamp-4 mb-4 whitespace-pre-wrap break-words">
        {note.content}
      </p>

      {/* Date */}
      <p className="text-xs text-primary-500 mb-4">
        {formatDate(note.timestamp)}
      </p>

      {/* Action Buttons */}
      <div
        className={`flex flex-wrap gap-2 transition-all duration-200 ${
          showActions ? 'opacity-100' : 'opacity-0 md:opacity-100'
        }`}
      >
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all text-primary-600 hover:text-primary-900"
          title="Edit note"
          aria-label="Edit note"
        >
          <Edit2 className="w-4 h-4" />
        </button>

        <button
          onClick={handleCopy}
          className="p-2 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all text-primary-600 hover:text-primary-900"
          title="Copy note"
          aria-label="Copy note"
        >
          <Copy className="w-4 h-4" />
        </button>

        <button
          onClick={() => onPin(note.id)}
          className={`p-2 rounded-lg transition-all ${
            note.isPinned
              ? 'bg-white bg-opacity-60 text-accent-orange'
              : 'hover:bg-white hover:bg-opacity-60 text-primary-600'
          }`}
          title={note.isPinned ? 'Unpin note' : 'Pin note'}
          aria-label={note.isPinned ? 'Unpin note' : 'Pin note'}
        >
          <Pin className="w-4 h-4" fill={note.isPinned ? 'currentColor' : 'none'} />
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="p-2 hover:bg-red-100 rounded-lg transition-all text-primary-600 hover:text-red-600 ml-auto"
          title="Delete note"
          aria-label="Delete note"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
