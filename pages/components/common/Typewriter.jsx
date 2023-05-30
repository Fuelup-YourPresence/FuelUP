import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(timer);
      };
    } else {
      const cursorTimer = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500);

      setTimeout(() => {
        clearInterval(cursorTimer);
        setShowCursor(false);
      }, 5000);

      return () => {
        clearInterval(cursorTimer);
      };
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      {showCursor && "|"}
    </span>
  );
};

export default Typewriter;
