"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";
import React, { lazy } from "react";

const MeshProvider = lazy(() =>
    import("@meshsdk/react").then(module => {
        return { default: module.MeshProvider };
    })
);
export function Providers({ children }: { children: React.ReactNode }) {

    return (

        <ThemeProvider
            attribute="class"
            enableSystem={false}
            themes={["is_light", "is_dark"]}
        >

            <MetaMaskProvider>  <MeshProvider>{children} </MeshProvider></MetaMaskProvider>
        </ThemeProvider>
    );
}
