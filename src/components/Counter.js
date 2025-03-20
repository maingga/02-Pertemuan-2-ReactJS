import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Hitungan: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default Counter;
