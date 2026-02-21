import { useState } from "react";

export default function BuildError() {
  // Lỗi Type-check: gán kiểu không khớp
  const [count, setCount] = useState<number>(0);

  // Ép kiểu sai để tsc báo lỗi
  const errorValue: string = count;

  return (
    <div>
      <h1>File này sẽ làm hỏng bước Type-check và Build</h1>
      <p>{errorValue}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
