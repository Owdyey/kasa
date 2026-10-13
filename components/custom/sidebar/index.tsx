"use client"

import KasaLogo from "@/components/icons/kasa-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SIDEBAR_NAVIGATION } from "@/constant/sidebar"
import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppSidebar() {
  const pathname = usePathname()
  const currentPage = pathname.split("/")[1]
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2">
          <KasaLogo />
          <p className="text-[18px] font-extrabold text-white">Kasa</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SIDEBAR_NAVIGATION.map(({ label, url, icon }) => {
              const Icon = icon
              const isActive = currentPage === url
              return (
                <SidebarMenuItem key={url}>
                  <Link href={url}>
                    <SidebarMenuButton
                      size={"lg"}
                      className={cn(
                        isActive &&
                          "bg-primary text-sidebar-accent-foreground hover:bg-primary"
                      )}
                    >
                      {Icon && <Icon />}
                      {label}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
