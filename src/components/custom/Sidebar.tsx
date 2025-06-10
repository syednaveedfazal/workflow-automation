"use client";
import {
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
  CoinsIcon,
} from "lucide-react";
import { ProjectLogo } from "@/components/custom/ProjectLogo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];
export function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find((route) => `/${route.href}` === pathname) || routes[0];
  return (
    <div
      className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full 
  bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground
  border-r-2 border-separate"
    >
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <ProjectLogo />
      </div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={buttonVariants({
              variant:
                activeRoute?.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
