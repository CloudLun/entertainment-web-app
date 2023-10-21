"use client"

import { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode, } from "react";


type Props = {
    children: ReactNode
}

const WindowSizeContext = createContext<WindowSizeContextType | null>(null)

const WindowSizeProvider = ({ children }: Props) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleWindowResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener("resize", handleWindowResize);

            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);

    return (
        <WindowSizeContext.Provider value={{windowWidth}}>
            {children}
        </WindowSizeContext.Provider>
    )
}

export { WindowSizeContext, WindowSizeProvider }