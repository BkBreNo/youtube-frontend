import { createContext, ReactNode, useState } from "react";

type MenuStoreProps = {
    children: ReactNode;
}

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void
    results: string,
    setResults: (newState: string) => void
}

const initialValue = {
    openMenu: true,
    setOpenMenu: () => { },
    results: '',
    setResults: () => { }
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuStore = ({ children }: MenuStoreProps) => {

    const [openMenu, setOpenMenu] = useState(initialValue.openMenu)
    const [results, setResults] = useState('');

    return (
        <MenuContext.Provider value={{ openMenu, setOpenMenu, results, setResults }}>
            {children}
        </MenuContext.Provider>
    )
}   