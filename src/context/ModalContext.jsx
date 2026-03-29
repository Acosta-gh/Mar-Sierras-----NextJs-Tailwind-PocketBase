'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isAsociateModalOpen, setIsAsociateModalOpen] = useState(false);

    const openAsociateModal = () => setIsAsociateModalOpen(true);
    const closeAsociateModal = () => setIsAsociateModalOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isAsociateModalOpen,
                openAsociateModal,
                closeAsociateModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
