import React, { createContext, useContext, useState } from 'react'

const CursorContext = createContext()


export const useCursor = () => useContext(CursorContext)

function CursorProvider({ children }) {

    const [cursorSize, setCursorSize] = useState('0px')


    return (
        <CursorContext.Provider value={{ cursorSize, setCursorSize }}>
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider