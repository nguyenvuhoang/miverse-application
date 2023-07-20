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
        name: "Reward",
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
        id: 6,
        name: "Contact"
    },
];
