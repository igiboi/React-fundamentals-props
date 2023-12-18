export default function Section({ title, children, ...props }) {
  return (
    // forwarded props {...} means rest property
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
