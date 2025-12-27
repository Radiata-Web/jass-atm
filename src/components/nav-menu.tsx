import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function NavMenu() {
  const isMobile = useIsMobile();

  const navigationItems: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Home",
      href: "/",
      description: "Home",
    },
    {
      title: "About",
      href: "/about",
      description: "About",
    },
  ];

  return (
    <div className="h-16 flex items-center shadow-lg">
      <div className="flex items-center justify-between w-full lg:max-w-[80%] mx-auto px-6">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/jass-logo.svg"
              alt="Jass ATM logo"
              width={28}
              height={28}
            />
          </Link>
          <h1 className="text-xl font-semibold">Jass ATM</h1>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <NavigationMenu viewport={isMobile}>
              <NavigationMenuList className="flex-wrap">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link to={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation Menu
              </SheetDescription>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/jass-logo.svg"
                    alt="Jass ATM logo"
                    width={28}
                    height={28}
                  />
                  <h1 className="text-xl font-semibold">Jass ATM</h1>
                </div>
                <nav className="flex flex-col space-y-3">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <Link to={item.href}>{item.title}</Link>
                    </Button>
                  ))}
                  <Button asChild className="mt-2">
                    <Link to="/contact">Contact</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
}
