import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="md:flex h-screen mx-auto" >
      <SideNav />
      <section>{children}</section>
    </body>
  );
}
