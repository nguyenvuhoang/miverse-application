interface NavigationType {
    id: number;
    name: string;
    dropdown?: {
        id: number;
        name: string;
        path?: string | undefined;
        dropdown?: {
            id: number;
            name: string;
            path: string;
        }[];
    }[];
}

export const navigation: NavigationType[] = [
    {
        id: 2,
        name: "Explore",
        dropdown: [
            {
                id: 1,
                name: "Explore Style 1",
                path: "/explore-1",
            },
            {
                id: 2,
                name: "Explore Style 2",
                path: "/explore-2",
            },
            {
                id: 3,
                name: "Explore Style 3",
                path: "/explore-3",
            },
            {
                id: 4,
                name: "Explore Style 4",
                path: "/explore-4",
            },
            {
                id: 5,
                name: "Live Auctions",
                path: "/live-auctions",
            },
            {
                id: 6,
                name: "Item Details",
                path: "/item-details-1",
            },
            {
                id: 7,
                name: "Item Details 2",
                path: "/item-details-2",
            },
        ],
    },
    {
        id: 3,
        name: "Activity",
        dropdown: [
            {
                id: 1,
                name: "Activity 1",
                path: "/activity-1",
            },
            {
                id: 2,
                name: "Activity 2",
                path: "/activity-2",
            },
        ],
    },
    {
        id: 4,
        name: "Community",
        dropdown: [
            {
                id: 1,
                name: "Blog",
                path: "/blog",
            },
            {
                id: 2,
                name: "Blog Details",
                path: "/blog-details",
            },
            {
                id: 3,
                name: "Help Center",
                path: "/help-center",
            },
        ],
    },
    {
        id: 5,
        name: "Pages",
        dropdown: [
            {
                id: 1,
                name: "Authors",
                path: "/authors-1",
            },
            {
                id: 2,
                name: "Authors 2",
                path: "/authors-2",
            },
            {
                id: 3,
                name: "Wallet Connect",
                path: "/connect-wallet",
            },
            {
                id: 4,
                name: "Create Item",
                path: "/create-item",
            },
            {
                id: 5,
                name: "Edit Profile",
                path: "/edit-profile",
            },
            {
                id: 6,
                name: "Ranking",
                path: "/ranking",
            },
            {
                id: 7,
                name: "Login",
                path: "/login",
            },
            {
                id: 8,
                name: "Sing Up",
                path: "/signup",
            },
            {
                id: 9,
                name: "No Result",
                path: "/no-result",
            },
            {
                id: 10,
                name: "FAQ",
                path: "/faq",
            },
            {
                id: 11,
                name: "404",
                path: "/page-not-found",
            },
        ],
    },
    {
        id: 6,
        name: "Contact",
        dropdown: [
            {
                id: 1,
                name: "Contact 1",
                path: "/contact-1",
            },
            {
                id: 2,
                name: "Contact 2",
                path: "/contact-2",
            },
        ],
    },
];
