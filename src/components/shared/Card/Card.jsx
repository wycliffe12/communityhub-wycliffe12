
function Card({ title, children, variant = "default" }) {
  return (
    <section className={`card card-${variant}`}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}

export default Card;
