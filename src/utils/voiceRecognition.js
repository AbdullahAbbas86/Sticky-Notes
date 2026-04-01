// Voice to Text Utility
export const initSpeechRecognition = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    console.warn('Speech Recognition API is not supported in this browser');
    return null;
  }
  
  return new SpeechRecognition();
};

export const startVoiceRecording = (callback, errorCallback) => {
  const recognition = initSpeechRecognition();
  
  if (!recognition) {
    errorCallback('Speech Recognition not supported');
    return null;
  }
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  recognition.onstart = () => {
    console.log('Voice recording started');
  };
  
  recognition.onresult = (event) => {
    let finalTranscript = '';
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      }
    }
    
    if (finalTranscript) {
      callback(finalTranscript.trim());
    }
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    errorCallback(`Error: ${event.error}`);
  };
  
  recognition.onend = () => {
    console.log('Voice recording ended');
  };
  
  recognition.start();
  return recognition;
};

export const checkSpeechRecognitionSupport = () => {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
};
