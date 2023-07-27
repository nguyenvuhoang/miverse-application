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
                name: "Collection stats",
                path: "/collection/statistics",
            },
            {
                id: 2,
                name: "All collection",
                path: "/explore-2",
            }
        ],
    },
    {
        id: 3,
        name: "Reward",
        dropdown: [
            {
                id: 1,
                name: "------",
                path: "/",
            }
        ],
    },
    {
        id: 4,
        name: "Create"
    },
    
    {
        id: 6,
        name: "About",
        dropdown: [
            {
                id: 1,
                name: "Our team",
                path: "/our-team",
            },
            {
                id: 2,
                name: "See FAQ",
                path: "/see-faq",
            }
        ],
    },
];
