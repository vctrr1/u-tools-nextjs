"use client"
import { Home } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { calcItems, utilsItems } from "@/constants/page-constants"

export function AppSidebar() {

  const pathname = usePathname()

  const date = new Date()

  const dateFormatter = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
    }).format(date)
  }

  const hourFormatter = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(date)
  }

  return (
    <Sidebar>
      <SidebarHeader className="items-center flex flex-row justify-around pt-[18px] pb-[18px]">
        <h1 className="text-xl">
          {dateFormatter(date)}
        </h1>
        <h1 className="text-xl">
          {hourFormatter(date)}
        </h1>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <div className="pt-5 pl-2">
          <SidebarMenuButton asChild isActive={pathname === "/"}>
           <Link href="/">
             <Home />
             <span className="text-base">Home</span>
           </Link>
          </SidebarMenuButton>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Úteis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {utilsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center space-x-1">
                      <item.icon/>
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Calculadoras</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {calcItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center space-x-1">
                      <item.icon/>
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
