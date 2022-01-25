import {
    FlagOutlined,
    UserOutlined,
    FireOutlined,
    DeleteOutlined,
    SettingOutlined,
    FolderOutlined,
    SkinOutlined,
    LineChartOutlined,
    WechatOutlined
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
        name: "Категории",
        link: "/category",
        Icon: FolderOutlined
    },
    {
        name: "Роли",
        link: "/role",
        Icon: SkinOutlined
    },
    {
        name: "Статистика",
        link: "/statistics",
        Icon: LineChartOutlined
    },
    {
        name: "Чат",
        link: "/chat",
        Icon: WechatOutlined
    },
    {
        name: "Настройка",
        link: "/settings",
        Icon: SettingOutlined
    }
]