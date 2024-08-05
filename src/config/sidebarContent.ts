import {
  LucideIcon,
  Layout,
  Archive,
  User,
  Clipboard,
  CircleDollarSign,
  ChartNoAxesCombined
} from "lucide-react";
import routesPath from "./routePath";
import Role from "./role";

const UserViewAccess = [Role.ADMIN, Role.USER];

export interface SidebarItem {
  label: string;
  path: string;
  icon: LucideIcon;
  requiredRole: string[];
  children?: SidebarItem[];
}

export const sideBarContent: SidebarItem[] = [
  {
    label: "Analytics",
    icon: ChartNoAxesCombined,
    path: routesPath.analytic,
    requiredRole: UserViewAccess,
  },
  {
    label: "Campaign",
    icon: Archive,
    path: routesPath.campaign,
    requiredRole: UserViewAccess,
  },
  {
    label: "Products",
    icon: Clipboard,
    path: routesPath.products,
    requiredRole: UserViewAccess,
  },
  {
    label: "User",
    icon: User,
    path: routesPath.users,
    requiredRole: UserViewAccess,
  },
  {
    label: "Expense",
    icon: CircleDollarSign,
    path: routesPath.expenses,
    requiredRole: UserViewAccess,
  },
];
