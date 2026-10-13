import { SidebarType } from "@/types/sidebar"
import { LayoutGrid } from "lucide-react"

export const SIDEBAR_NAVIGATION: SidebarType[] = [
  { label: "Dashboard", url: "", icon: LayoutGrid },
  { label: "POS", url: "pos" },
  { label: "Orders", url: "orders" },
  { label: "Products", url: "products" },
  { label: "Inventory", url: "inventory" },
  { label: "Purchasing", url: "purchasing" },
  { label: "Customer", url: "customer" },
  { label: "Reports", url: "reports" },
  { label: "User & Roles", url: "user-roles" },
  { label: "Settings", url: "settings" },
]
