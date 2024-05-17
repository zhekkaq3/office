import { SVGProps } from "react";
import { Button } from "../shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../shared/ui/dropdown-menu"
import { EllipsisVerticalIcon } from "lucide-react";
import { ModeToggle } from "@/shared/ui/modeToggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/shared/ui/navigation-menu";
import { cn } from "@/shared/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/ui/select";


function Header() {



    return (

        <header className="fixed top-0 z-500 w-full border-b border-border/40 z-50">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <a
                    className="md:flex items-center justify-center gap-2 font-semibold text-gray-900 dark:text-gray-50 h-9 w-9 md:w-auto md:h-auto hidden"
                    href="#"
                >
                    <MountainIcon className="h-6 w-6" />
                    <span className="hidden md:flex">
                        <p className="font-bold text-lg">Ecommerce</p>
                    </span>
                </a>
                <NavMenu />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <Select>
                        <SelectTrigger className="m-1 w-[220px]">
                            <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard</SelectItem>
                                <SelectItem value="cst">Central Standard</SelectItem>
                                <SelectItem value="mst">Mountain Standard</SelectItem>
                                <SelectItem value="pst">Pacific Standard</SelectItem>          
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Europe & Africa</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean</SelectItem>
                                <SelectItem value="cet">Central European</SelectItem>
                                <SelectItem value="eet">Eastern European</SelectItem>
                                <SelectItem value="west">
                                    Western European Summer Time (WEST)
                                </SelectItem>
                                <SelectItem value="cat">Central Africa</SelectItem>
                                <SelectItem value="eat">East Africa</SelectItem>
                            </SelectGroup>
                            
                        </SelectContent>
                    </Select>
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="focus:outline-none">
                            <Button size="icon" variant="ghost" className="h-9 w-9">
                                <EllipsisVerticalIcon className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>
                                <a href="#">Home</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#">About</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#">Contact</a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </header>


    )
}

export default Header

export function NavMenu() {
    return (
        <NavigationMenu className="pl-8">
            <NavigationMenuList>
                <NavigationMenuItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-normal tracking-wide">Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-50 relative">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="z-50 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Home
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/">
                        <NavigationMenuLink className="tracking-wide">
                            Documentation
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

type ListItemType = {
    className?: string,
    title?: string,
    children?: React.ReactNode,
    href: string
}

const ListItem = ({ className, title, children, href }: ListItemType) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}


function MountainIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}