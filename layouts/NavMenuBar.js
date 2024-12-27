"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { businessesArray, projectsArray } from "@/lib/data";

export function NavMenuBar() {
  return (
    <div className="flex mr-10 justify-center ml-48">
      <NavigationMenu className="">
        <NavigationMenuList>

        <NavigationMenuItem>
            <Link href="/#" legacyBehavior passHref>
              <NavigationMenuLink className="mr-1 p-3 rounded-md hover:text-red-800">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg font-normal hover:text-red-800 hover:bg-white">
              Our Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {businessesArray.map((business) => {
                  return (
                    <ListItem
                    className="hover:text-red-800"
                      key={business.label}
                      href={business.href}
                      title={business.label}
                    ></ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

         {/*  <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink className="mr-1 p-3 rounded-md hover:text-red-800">
               Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>   */}        
          
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className="mr-1 p-3 rounded-md  hover:text-red-800">
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 rounded-md leading-none no-underline outline-none transition-colors hover:text-red-800 focus:text-red-800",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p> */}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
