import BlackUsers from "./blackUsers/BlackUsers";
import Events from "./events/Events";
import Map from "./map/Map";
import Settings from "./settings/Settings";
import Users from "./users/Users";
import Statistics from "./statistics/index";
import Roles from "./roles";
import Category from "./category";
import Chat from "./chat";

export const routers = [
    {
        path: "/users",
        exact: true,
        strict: true,
        Component: Users
    },
    {
        path: "/map",
        exact: true,
        strict: true,
        Component: Map
    },
    {
        path: "/blacklist",
        exact: true,
        strict: true,
        Component: BlackUsers
    },
    {
        path: "/events",
        exact: true,
        strict: true,
        Component: Events
    },
    {
        path: "/settings",
        exact: true,
        strict: true,
        Component: Settings
    },
    {
        path: "/statistics",
        exact: true,
        strict: true,
        Component: Statistics
    },
    {
        path: "/role",
        exact: true,
        strict: true,
        Component: Roles
    },
    {
        path: "/category",
        exact: true,
        strict: true,
        Component: Category
    },
    {
        path: "/chat",
        exact: true,
        strict: true,
        Component: Chat
    }
]