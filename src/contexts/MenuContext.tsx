import { createContext, ReactNode, useState } from "react";

type MenuStoreProps = {
    children: ReactNode;
}

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void
    results: string,
    setResults: (newState: string) => void,
    positionMenu: boolean,
    setPositionMenu: (newState: boolean) => void,
}

const initialValue = {
    openMenu: true,
    setOpenMenu: () => { },
    results: '',
    setResults: () => { },
    positionMenu: false,
    setPositionMenu: () => { },
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuStore = ({ children }: MenuStoreProps) => {

    const [openMenu, setOpenMenu] = useState(initialValue.openMenu)
    const [results, setResults] = useState('');
    const [positionMenu, setPositionMenu] = useState(initialValue.positionMenu)

    return (
        <MenuContext.Provider value={{
            openMenu,
            setOpenMenu,
            results,
            setResults,
            positionMenu,
            setPositionMenu,
        }}>
            {children}
        </MenuContext.Provider>
    )
}   