"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import * as React from "react";

const Navigationbar = () => {
  return (
    <>
      <NavigationMenu className="sticky top-0 z-30 max-w-2xl mx-auto">
        <NavigationMenuList className=" flex mx-0 items-center justify-between gap-12 md:py-10 max-md:p-10 max-md:w-screen">
          <NavigationMenuItem className="flex">
            <Link href="/">
              <h1 className="text-xl font-black">Shelby.shop</h1>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex justify-between items-center w-full md:w-auto">
            <ul className="menu menu-horizontal px-1 gap-4">
              <li>
                <NavigationMenuLink
                  href="/home"
                  className={navigationMenuTriggerStyle()}
                >
                  <p>Home</p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/product"
                  className={navigationMenuTriggerStyle()}
                >
                  <p>Product</p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  <p>About</p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="/support"
                  className={navigationMenuTriggerStyle()}
                >
                  <p>Support</p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex w-full md:w-auto md:order-2 max-md:items-end max-md:justify-end">
            <Link href="/signin">
              <Button className="max-md:hidden items-end" variant="default">
                Login
              </Button>
            </Link>
            <div className="dropdown dropdown-end justify-end items-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="dropdown-content text-end z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Product</a>
                </li>
                <li>
                  <a>Support</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navigationbar;
