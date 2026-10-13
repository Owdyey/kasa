import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CURRENT_USER, EMAIL, USER_ROLE } from "@/constant/user"
import { ChevronDown, LogOut, Settings } from "lucide-react"
import WordInitial from "../word-initial"

export default function Header() {
  return (
    <div className="sticky top-0 flex h-18 items-center justify-end bg-white px-7 shadow-2xs">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <div className="flex items-center gap-2 rounded-sm border p-2">
              <WordInitial text={CURRENT_USER} />
              <div>
                <p className="text-[11px] font-extrabold">{CURRENT_USER}</p>
                <p className="text-[9px]">{USER_ROLE}</p>
              </div>
              <ChevronDown size={13} />
            </div>
          }
        />
        <DropdownMenuContent align="end" className="w-72.5 p-4">
          <div className="mb-2 flex items-center justify-start gap-2">
            <WordInitial text={CURRENT_USER} />
            <div>
              <p className="text-xs font-bold">{CURRENT_USER}</p>
              <p className="text-[10px]">{EMAIL}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings />
            Account settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
        <></>
      </DropdownMenu>
    </div>
  )
}
