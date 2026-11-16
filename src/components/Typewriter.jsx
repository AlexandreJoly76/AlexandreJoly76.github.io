import { useState, useEffect } from 'react';

const typingSpeed = 150;
const deletingSpeed = 75;
const pauseTime = 2000;

// Écrit puis efface chaque mot de `words` en boucle.
// Le parent lui passe key={lang} pour repartir de zéro au changement de langue.
const Typewriter = ({ prefix, words }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = words[textIndex % words.length];
    let delay;
    let step;

    if (!isDeleting && displayText === currentWord) {
      delay = pauseTime;
      step = () => setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      delay = typingSpeed;
      step = () => {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      };
    } else {
      delay = isDeleting ? deletingSpeed : typingSpeed;
      step = () =>
        setDisplayText(currentWord.substring(0, displayText.length + (isDeleting ? -1 : 1)));
    }

    const timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, words]);

  return (
    <span className="typewriter">
      {prefix}
      <strong>{displayText}</strong>
    </span>
  );
};

export default Typewriter;
