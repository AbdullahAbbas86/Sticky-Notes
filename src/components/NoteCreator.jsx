import { Plus, Mic, X } from 'lucide-react';
import { useState } from 'react';
import { startVoiceRecording, checkSpeechRecognitionSupport } from '../utils/voiceRecognition';
import { noteColors } from '../utils/helpers';

export const NoteCreator = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('yellow');
  const [isRecording, setIsRecording] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const voiceSupported = checkSpeechRecognitionSupport();
  let recognition = null;

  const handleAddNote = () => {
    if (title.trim() || content.trim()) {
      onAddNote(title || 'Untitled', content, selectedColor);
      setTitle('');
      setContent('');
      setSelectedColor('yellow');
    }
  };

  const handleVoiceInput = () => {
    if (isRecording && recognition) {
      recognition.stop();
      setIsRecording(false);
      return;
    }

    setIsRecording(true);
    recognition = startVoiceRecording(
      (transcript) => {
        setContent(prev => (prev ? prev + ' ' : '') + transcript);
        setIsRecording(false);
      },
      (error) => {
        setIsRecording(false);
        alert(`Voice input error: ${error}`);
      }
    );
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
    setSelectedColor('yellow');
  };

  const selectedColorClass = noteColors.find(c => c.name === selectedColor) || noteColors[0];

  return (
    <div className="w-full bg-white shadow-medium border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 mb-4 sm:mb-5 flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center flex-shrink-0">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          Sticky Notes
        </h1>

        <div className={`p-3 sm:p-4 md:p-5 rounded-lg border-2 ${selectedColorClass.border} ${selectedColorClass.bg} transition-all animate-slide-up shadow-soft`}>
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a title..."
            className="w-full text-sm sm:text-base md:text-lg font-semibold text-primary-900 bg-transparent placeholder-primary-400 focus:outline-none mb-2 sm:mb-3 transition-colors"
            maxLength={50}
          />

          {/* Content Input */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Take a note... or use voice input "
            className="w-full h-16 sm:h-20 md:h-24 text-xs sm:text-sm md:text-base text-primary-700 bg-transparent placeholder-primary-400 focus:outline-none resize-none transition-colors"
            maxLength={500}
          />

          {/* Character Count */}
          <div className="text-xs text-primary-500 mb-3 sm:mb-4 text-right">
            {content.length}/500
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex flex-wrap gap-2">
              {/* Color Picker */}
              <div className="relative">
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="p-2 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all"
                  title="Choose color"
                  aria-label="Choose note color"
                >
                  <div className="flex gap-1">
                    {noteColors.map(color => (
                      <div
                        key={color.name}
                        className={`w-4 h-4 rounded-full border-2 ${
                          selectedColor === color.name ? 'border-primary-900' : 'border-transparent'
                        }`}
                        style={{
                          backgroundColor: {
                            yellow: '#fbbf24',
                            pink: '#f472b6',
                            blue: '#60a5fa',
                            green: '#34d399',
                            purple: '#a78bfa',
                            orange: '#fb923c',
                          }[color.name],
                        }}
                      />
                    ))}
                  </div>
                </button>

                {showColorPicker && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg p-3 flex gap-2 flex-wrap w-48 animate-slide-up">
                    {noteColors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColor(color.name);
                          setShowColorPicker(false);
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                          selectedColor === color.name ? 'border-primary-900 scale-110' : 'border-transparent'
                        }`}
                        style={{
                          backgroundColor: {
                            yellow: '#fbbf24',
                            pink: '#f472b6',
                            blue: '#60a5fa',
                            green: '#34d399',
                            purple: '#a78bfa',
                            orange: '#fb923c',
                          }[color.name],
                        }}
                        title={color.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Voice Input Button */}
              {voiceSupported && (
                <button
                  onClick={handleVoiceInput}
                  className={`p-2 rounded-lg transition-all flex items-center gap-1 ${
                    isRecording
                      ? 'bg-red-100 text-red-600'
                      : 'hover:bg-white hover:bg-opacity-60 text-primary-600'
                  }`}
                  title={isRecording ? 'Stop recording' : 'Start voice recording'}
                  aria-label="Voice input"
                >
                  <Mic className="w-5 h-5" />
                  {isRecording && <span className="text-xs font-semibold">Recording...</span>}
                </button>
              )}

              {/* Clear Button */}
              {(title || content) && (
                <button
                  onClick={handleClear}
                  className="p-2 hover:bg-white hover:bg-opacity-60 rounded-lg transition-all text-primary-600"
                  title="Clear all"
                  aria-label="Clear form"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Add Note Button */}
            <button
              onClick={handleAddNote}
              disabled={!title.trim() && !content.trim()}
              className="w-full sm:w-auto px-5 sm:px-6 py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm font-semibold"
              aria-label="Add note"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCreator;
