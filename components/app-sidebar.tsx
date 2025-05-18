"use client"
import * as React from "react"
import {
  Users,
  GraduationCap,
  LayoutGrid,
  DollarSign,
  Settings2,
  Home,
  LineChart,
  FileText,
  Bell,
  User,
  LogOut,
  PenIcon,
  BadgeDollarSign,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Education Management System data structure
const data = {
  user: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/avatars/admin-avatar.jpg",
  },
  teams: [
    {
      name: "CSEDU PMICS Portal",
      logo: GraduationCap,
      plan: "Educational",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/protected",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Main Dashboard",
          url: "/protected",
        }
      ]
    },
    {
      title: "Teachers",
      url: "/protected/teachers",
      icon: Users,
      items: [
        {
          title: "All Teachers",
          url: "/protected/teachers",
        }
      ],
    },
    {
      title: "Batches",
      url: "/protected/batch",
      icon: LayoutGrid,
      items: [
        {
          title: "Manage Batches",
          url: "/protected",
        }
      ],
    },
    {
      title: "Courses",
      url: "/protected/courses",
      icon: GraduationCap,
      items: [
        {
          title: "All Courses",
          url: "/protected/courses",
        },
      ],
    },
    {
      title: "Fees",
      url: "/protected/fess",
      icon: BadgeDollarSign,
      items: [
        {
          title: "All Type of Fees",
          url: "/protected/fees",
        },
        {
          title: "Fee Collection",
          url: "/protected/fees/collection",
        },
      ],
    },
    {
      title: "Reports",
      url: "/protected/reports",
      icon: LineChart,
      items: [
      {
        title: "All Reports",
        url: "/protected/report",
      }
    ]
      
    },
  ],
  projects: [
    {
      name: "Quick Links",
      url: "#",
      icon: FileText,
    },
    {
      name: "Notifications",
      url: "/protected/notifications",
      icon: Bell,
      badge: 3,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser 
          user={data.user} 
          actions={[
            {
              label: "Profile",
              icon: User,
              onClick: () => window.location.href = "/protected/profile",
            },
            {
              label: "Settings",
              icon: Settings2,
              onClick: () => window.location.href = "/protected/settings",
            },
            {
              label: "Sign out",
              icon: LogOut,
              onClick: () => window.location.href = "/sign-out",
            },
          ]}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}