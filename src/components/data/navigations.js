import {
    FlagOutlined,
    UserOutlined,
    FireOutlined,
    DeleteOutlined,
    SettingOutlined
} from '@ant-design/icons';


export const navigatons = [
    {
        name: "Пользователи",
        link: "/users",
        Icon: UserOutlined
    },
    {
        name: "Карта",
        link: "/map",
        Icon: FlagOutlined
    },
    {
        name: "Заблокированные пользователи",
        link: "/blacklist",
        Icon: DeleteOutlined
    },
    {
        name: "Ивенты",
        link: "/events",
        Icon: FireOutlined
    },
    {
        name: "Настройка",
        link: "/settings",
        Icon: SettingOutlined
    }
]