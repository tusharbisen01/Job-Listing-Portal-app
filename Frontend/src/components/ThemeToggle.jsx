import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="toggle">
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
