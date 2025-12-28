"use client";
import {
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
  CoinsIcon,
  ChevronsRight,
  ChevronsLeft,
  MenuIcon,
} from "lucide-react";
import { ProjectLogo } from "@/components/custom/ProjectLogo";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
  const [isOpen, setIsOpen] = useState(true);
  const activeRoute =
    routes.find((route) => `/${route.href}` === pathname) || routes[0];

  if (!isOpen) {
    return (
      <div className="hidden relative md:flex h-screen w-[60px] flex-col items-center gap-4 border-r-2 border-separate bg-primary/5 dark:bg-secondary/30 py-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setIsOpen(true)}
          className="rounded-full"
        >
          <ChevronsRight size={20} />
        </Button>
      </div>
    );
  }

  return (
    <div
      className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full 
  bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground
  border-r-2 border-separate"
    >
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <ProjectLogo />
        <Button
          variant={"ghost"}
          size={"icon"}
          className="absolute right-2"
          onClick={() => setIsOpen(false)}
        >
          <ChevronsLeft size={20} />
        </Button>
      </div>
      <div className="flex flex-col px-2 py-4">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={buttonVariants({
              variant:
                activeRoute?.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            }) + " my-1"}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute =
    routes.find((route) => `/${route.href}` === pathname) || routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side={"left"}
          >
            <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
              <ProjectLogo />
            </div>
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  onClick={() => setOpen(false)}
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
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
