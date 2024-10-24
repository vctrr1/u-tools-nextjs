"use client"
import { Home, CircleDollarSign , Scale, Calendar1, Weight, Calculator, Cylinder, Percent, WholeWord, Variable } from "lucide-react"
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

// Menu items.
const items = [
  {
    title: "IMC",
    url: "/imc",
    icon: Weight,
  },
  {
    title: "Conversão",
    url: "/currency",
    icon: CircleDollarSign,
  }
]

const items2 = [
  {
    title: "Calculadora",
    url: "/",
    icon: Calculator,
  },
  {
    title: "Porcentagem",
    url: "/currency",
    icon: Percent,
  },
  {
    title: "Conversão de Unidades",
    url: "/imc",
    icon: Scale,
  },
  {
    title: "Datas",
    url: "/currency",
    icon: Calendar1,
  },
  {
    title: "Área",
    url: "/currency",
    icon: Cylinder,
  },
  {
    title: "Conversor de Números Romanos",
    url: "/currency",
    icon: WholeWord,
  },
  {
    title: "Regra de Três",
    url: "/currency",
    icon: Variable,
  }
]



export function AppSidebar() {
  const pathname = usePathname()
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
        <div className="pt-7 pl-2">
          <SidebarMenuButton asChild className="">
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
              {items.map((item) => (
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
              {items2.map((item) => (
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
