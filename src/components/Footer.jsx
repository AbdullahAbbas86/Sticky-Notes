import { Trash2, Github, Mail, Star } from 'lucide-react';

export const Footer = ({ totalNotes, onClearAll }) => {
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all notes? This action cannot be undone.')) {
      onClearAll();
    }
  };

  return (
    <>
      {/* Clear Notes Section - Above Footer */}
      <div className="w-full px-4 py-4 sm:py-6 sm:px-6 lg:px-8 bg-white border-t border-primary-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          {/* Total Notes Count */}
          <div className="text-sm sm:text-base">
            <p className="text-primary-600">
              Total Notes: <span className="font-bold text-accent-blue text-lg">{totalNotes}</span>
            </p>
          </div>

          {/* Clear All Button */}
          {totalNotes > 0 && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all text-xs sm:text-sm font-medium text-white"
            >
              <Trash2 className="w-4 h-4" />
              Clear All Notes
            </button>
          )}
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
            {/* About */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 text-white">About</h4>
              <p className="text-primary-200 text-xs leading-relaxed">
                Modern note-taking app inspired by Google Keep. Simple, fast & reliable.
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 text-white">Features</h4>
              <ul className="text-primary-200 text-xs space-y-1">
                <li className="flex items-center gap-1">
                  <span className="text-accent-green">✓</span> Create & Edit
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-accent-blue">✓</span> Voice Input
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-accent-yellow">✓</span> Pin Notes
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-accent-purple">✓</span> Auto-save
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 text-white">Resources</h4>
              <ul className="text-primary-200 text-xs space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Report Bug
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 text-white">Connect</h4>
              <div className="space-y-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors text-xs">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="mailto:support@example.com" className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors text-xs">
                  <Mail className="w-4 h-4" /> Contact
                </a>
                <button className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors text-xs">
                  <Star className="w-4 h-4" /> Rate Us
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-700 pt-4">
            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-primary-300">
              <p>© 2024-2026 Sticky Notes. Built with React & Tailwind CSS.</p>
              <p>Version 1.0.0</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
