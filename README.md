# Sticky Notes App 📝

A modern, responsive sticky notes application inspired by Google Keep. Built with React, Tailwind CSS, and Vite.

## ✨ Features

- ✅ **Create, Edit & Delete Notes** - Easy note management
- ✅ **Local Storage** - Notes persist across browser sessions
- ✅ **Color Coding** - Choose from 6 beautiful colors for your notes
- ✅ **Pin Notes** - Keep important notes at the top
- ✅ **Voice-to-Text** - Hands-free note creation using the Web Speech API
- ✅ **Copy Notes** - Quickly copy notes to clipboard
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Beautiful Animations** - Smooth transitions and interactions
- ✅ **Dark Theme Icons** - Modern icon set via Lucide React

## 📋 Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Storage**: LocalStorage API
- **Speech Recognition**: Web Speech API

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized build files will be in the `dist` directory.

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── NoteCreator.jsx    # Note input and creation
│   │   ├── NoteCard.jsx       # Individual note display
│   │   ├── NotesGrid.jsx      # Grid layout for notes
│   │   └── Footer.jsx         # Footer with info
│   ├── hooks/
│   │   └── useNotes.js        # Custom hook for note management
│   ├── utils/
│   │   ├── storage.js         # LocalStorage utilities
│   │   ├── voiceRecognition.js # Speech recognition utilities
│   │   └── helpers.js         # Helper functions
│   ├── styles/
│   │   └── index.css          # Global styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── public/                     # Static assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Project dependencies
```

## 🎨 Color Options

- 🟨 Yellow (default)
- 🟥 Pink
- 🟦 Blue
- 🟩 Green
- 🟪 Purple
- 🟧 Orange

## 🎙️ Voice Input

The app supports the Web Speech API for voice-to-text input. This feature:
- Works in modern browsers (Chrome, Edge, Firefox, Safari)
- Requires microphone permission
- Supports English language by default

## 💾 Local Storage

All notes are automatically saved to your browser's local storage. Your notes will:
- Persist across browser sessions
- Not be synced across devices
- Be cleared if you clear browser data

## ♿ Accessibility

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators for better visibility
- High contrast color scheme

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimized (sm, md breakpoints)
- Desktop enhanced (lg breakpoint)
- Touch-friendly buttons and interactions

## 🔧 Future Enhancements

- [ ] Dark mode theme
- [ ] Search functionality
- [ ] Note categories/labels
- [ ] Export notes as PDF
- [ ] Cloud synchronization
- [ ] Collaborative notes
- [ ] Rich text editor
- [ ] Note reminders

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 💝 Support

If you found this helpful, please consider giving it a star ⭐

---

**Made with ❤️ by Your Name**
