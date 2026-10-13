import Header from "@/components/custom/header"
import AppSidebar from "@/components/custom/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-[#f5f7fb]">
        <Header />
        <div>{children}</div>
      </main>
    </SidebarProvider>
  )
}
