import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconBell } from "@tabler/icons-react";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">Tola Software</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a href="#" rel="noopener noreferrer" target="_blank" className="dark:text-foreground relative !p-0">
              <IconBell className="size-7" />
              <span className="absolute -top-1 -right-0 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
