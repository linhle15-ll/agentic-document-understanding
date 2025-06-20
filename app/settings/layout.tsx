import { SideNavBar } from "@/components/commons/navbar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row items-start">
      <SideNavBar />
      <div className="bg-lightWhite w-full">{children}</div>
    </section>
  );
}
