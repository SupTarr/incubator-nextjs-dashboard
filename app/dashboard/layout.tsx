import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="md:flex h-screen mx-auto" >
      <SideNav />
      <body>{children}</body>
    </section>
  );
}
