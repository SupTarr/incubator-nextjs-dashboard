import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="md:flex h-screen mx-auto w-full" >
      <SideNav />
      <section className="w-full">{children}</section>
    </body>
  );
}
