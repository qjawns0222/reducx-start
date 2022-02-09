export default function Toddolist({ todos }) {
  return (
    <ul>
      {todos.map((p) => (
        <li>{p.text}</li>
      ))}
    </ul>
  );
}
