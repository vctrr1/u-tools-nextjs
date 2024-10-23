import { Home, Inbox} from "lucide-react"

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

// Menu items.
const items = [
  {
    title: "Imc",
    url: "/imc",
    icon: Home,
  },
  {
    title: "Conversão",
    url: "/currency",
    icon: Inbox,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="items-center flex flex-row justify-around pt-[18px] pb-[18px]">
        <h1 className="text-xl">
          22/05/25
        </h1>
        <h1 className="text-xl">
          18:45
        </h1>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
