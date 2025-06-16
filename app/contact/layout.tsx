export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center align-middle gap-4 py-8 md:py-10 bg-lightWhite">
      <div className="h-screen w-screen text-center justify-center align-middle">
        {children}
      </div>
    </section>
  );
}
