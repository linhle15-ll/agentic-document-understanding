export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-lightWhite">
      <div className="inline-block w-screen text-center justify-center">
        {children}
      </div>
    </section>
  );
}
