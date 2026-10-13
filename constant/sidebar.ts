import { SidebarType } from "@/types/sidebar"
import {
  Box,
  ChartLine,
  Layers,
  LayoutGrid,
  Settings,
  ShieldCheck,
  ShoppingCart,
  SquareText,
  Truck,
  Users,
} from "lucide-react"

export const SIDEBAR_NAVIGATION: SidebarType[] = [
  { label: "Dashboard", url: "", icon: LayoutGrid },
  { label: "POS", url: "pos", icon: ShoppingCart },
  { label: "Orders", url: "orders", icon: SquareText },
  { label: "Products", url: "products", icon: Box },
  { label: "Inventory", url: "inventory", icon: Layers },
  { label: "Purchasing", url: "purchasing", icon: Truck },
  { label: "Customer", url: "customer", icon: Users },
  { label: "Reports", url: "reports", icon: ChartLine },
  { label: "User & Roles", url: "user-roles", icon: ShieldCheck },
  { label: "Settings", url: "settings", icon: Settings },
]
