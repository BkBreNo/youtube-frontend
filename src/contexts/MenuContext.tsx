import { createContext, ReactNode, useState } from "react";

type MenuStoreProps = {
    children: ReactNode;
}

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void
}

const initialValue = {
    openMenu: true,
    setOpenMenu: () => { },
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuStore = ({ children }: MenuStoreProps) => {
    const [openMenu, setOpenMenu] = useState(initialValue.openMenu)

    return (
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </MenuContext.Provider>
    )
}   