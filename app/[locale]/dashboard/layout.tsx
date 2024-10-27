
import ButtonSignOut from "@/app/[locale]/components/ButtonSignOut";
import DashboardNav from "@/app/[locale]/components/DashboardNav";
import {getUser } from "@/lib/actionsUsers";
import { prisma } from "@/lib/db";

export default async function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();



  if (!user) {
    return <div>Please sign in</div>;
  }

  
  return (
    <section className="max-w-[1200px] mx-auto md:flex items-center gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-full">
        <ButtonSignOut />
        {children}
      </div>
    </section>
  );
}
