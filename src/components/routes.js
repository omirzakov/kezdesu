import BlackUsers from "./blackUsers/BlackUsers";
import Events from "./events/Events";
import Map from "./map/Map";
import Settings from "./settings/Settings";
import Users from "./users/Users";

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
]