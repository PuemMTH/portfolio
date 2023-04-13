import React from 'react';
import { useDarkMode } from 'usehooks-ts';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode(false);

  return (
    <div>
      <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  );
};

export default ThemeToggle;
