// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Format date
export const formatDate = (timestamp) => {
  const options = {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(timestamp).toLocaleDateString('en-US', options);
};

// Get color styles for notes
export const noteColors = [
  { name: 'yellow', bg: 'bg-yellow-50', border: 'border-yellow-200', accent: 'accent-yellow' },
  { name: 'pink', bg: 'bg-pink-50', border: 'border-pink-200', accent: 'accent-pink' },
  { name: 'blue', bg: 'bg-blue-50', border: 'border-blue-200', accent: 'accent-blue' },
  { name: 'green', bg: 'bg-green-50', border: 'border-green-200', accent: 'accent-green' },
  { name: 'purple', bg: 'bg-purple-50', border: 'border-purple-200', accent: 'accent-purple' },
  { name: 'orange', bg: 'bg-orange-50', border: 'border-orange-200', accent: 'accent-orange' },
];

// Get color by name
export const getColorClass = (colorName) => {
  return noteColors.find(c => c.name === colorName) || noteColors[0];
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// Compare dates for sorting
export const compareDate = (a, b) => {
  return new Date(b.timestamp) - new Date(a.timestamp);
};
