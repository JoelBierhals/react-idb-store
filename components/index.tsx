import React, { createContext, useContext } from "react"

const IndexedDB = createContext(null)

const useIndexedDB = useContext(IndexedDB)

const IndexedDBProvider = () => {
    // const 
    return <IndexedDB.Provider value={null}>

    </IndexedDB.Provider>
}

export default {
    IndexedDBProvider
}