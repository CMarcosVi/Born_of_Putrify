import React, { useState } from "react";

export default function Personagem() {
  const [health, setHealth] = useState(500);
  return (
    <section>
      <div>
        <div className="health" style={{ width: `${health}%` }}></div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
