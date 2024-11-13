"use client";

import "../style/home/loading.css";
import { useState, useEffect } from "react";

export default function loading() {
  const [display, setDisplay] = useState("");
  const text = "Now Loading...";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % (text.length + 1);
      setDisplay(text.slice(0, index));
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <div className="loading"> {display}</div>;
}
