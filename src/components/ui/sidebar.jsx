"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  BarChart,
  Settings,
  Activity,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Transactions", href: "/admin/transactions", icon: CreditCard },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart },
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Logs", href: "/admin/logs", icon: Activity },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-card">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-primary">Admin Portal</h1>
      </div>
      <ul className="flex flex-col py-4">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800",
                pathname === item.href ? "text-primary bg-accent" : ""
              )}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
