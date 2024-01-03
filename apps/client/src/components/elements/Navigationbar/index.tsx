"use client";

import * as React from "react";
import * as Icon from "phosphor-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/elements/Container";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const Navigationbar = () => {
  return (
    <>
      <NavigationMenu>
        <Container>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <h1 className="text-md md:text-xl font-black">Shelby.shop</h1>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="join hidden md:flex">
                <input
                  className="input input-bordered join-item w-[400px]"
                  placeholder="Search ..."
                  />
                <button className="btn join-item rounded-r-full">
                  <MagnifyingGlassIcon />
                </button>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="flex items-center justify-between w-auto gap-3">
                <div className="flex">
                  <Icon.ShoppingCart size={20} />
                  <div className="badge badge-primary badge-xs">1</div>
                </div>
                <div className="flex">
                  <Icon.Bell size={20} />
                  <div className="badge badge-primary badge-xs">1</div>
                </div>

                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabIndex={0} role="button" className="">
                    <Icon.List size={20} />
                  </div>
                  <ul
                  tabIndex={0}
                  className="dropdown-content  z-[1] menu bg-base-100 rounded"
                  >
                    <li>
                      <Link href="/signin">
                        <Button variant="default">Login</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuItem>

          </NavigationMenuList>
        </Container>
      </NavigationMenu>
    </>
  );
};

export default Navigationbar;
