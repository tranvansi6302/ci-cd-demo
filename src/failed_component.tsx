import { useState } from "react";

// LỖI 1: Tên file là 'failed_component.tsx' (không phải PascalCase)
// LỖI 2: Sử dụng 'export const' thay vì 'export default function'
// LỖI 3: Biến 'unused' được khai báo nhưng không sử dụng
// LỖI 4: Vi phạm Rule of Hooks (useSate gọi trong câu lệnh điều kiện)

export const failed_component = () => {
  const [count, setCount] = useState(0);
  const unused = "Tôi không được sử dụng";

  if (count > 0) {
    const [invalidHook] = useState(false); // Lỗi: Hooks không được nằm trong IF
  }

  return (
    <div>
      <h1>File này chắc chắn sẽ bị báo lỗi CI</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
