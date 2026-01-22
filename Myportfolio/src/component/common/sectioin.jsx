export default function Section({ id, children }) {
  return (
    <section id={id} className="py-24 scroll-mt-24">
      {children}
    </section>
  )
}