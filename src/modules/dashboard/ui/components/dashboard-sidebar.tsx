"use client";

import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroup,
    SidebarGroupContent
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";

import {
  BotIcon,
  StarIcon,
  VideoIcon,
  UserIcon,
  ExternalLinkIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";


const firstSection = [
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    },
]

const secondSection = [
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    },
]

const thirdSection = [
    {
        icon: UserIcon,
        label: "Developer's Portfolio",
        href: "https://onlylakshayji.de",
        external: true,
    },
]

export const DashboardSidebar = () => {

    const pathname = usePathname();
    //const pathname = "/meetings"
    
    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src= "/logo.svg" alt = "Lakshay Ai" height={36} width={36}/>
                    <p className="text-2xl font-semibold">Lakshay Ai</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#5D6B68]"/>
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50 ",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50"
                                        )} 
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="w-5 h-5"/>
                                            <span className="text-sm font-medium tracking-tight">{item.label}</span>
                                        </Link> 
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-4 py-2">
                    <Separator className="opacity-10 text-[#5D6B68]"/>
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50 ",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50"
                                        )} 
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="w-5 h-5"/>
                                            <span className="text-sm font-medium tracking-tight">{item.label}</span>
                                        </Link> 
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-4 py-2">
                    <Separator className="opacity-10 text-[#5D6B68]"/>
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {thirdSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50 ",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% to-50% to-sidebar/50"
                                        )} 
                                    >
                                        {/* <Link href={item.href}>
                                            <item.icon className="w-5 h-5"/>
                                            <span className="text-sm font-medium tracking-tight">{item.label}</span>
                                        </Link>  */}

                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group"
                                            >
                                            <item.icon className="w-5 h-5" />

                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>

                                            <ExternalLinkIcon
                                                className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-50"
                                            />
                                        </Link>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-white">
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    )
}