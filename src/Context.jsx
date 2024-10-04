import React,{useState,createContext} from "react";

export const Context = createContext()

const ContextProvider = (props) =>{
    const [BooksData,setBooksData] = useState([])
    const [searchText,setSearchText] = useState('')

    const ContextValue = {
        BooksData,setBooksData,searchText,setSearchText
    }

    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider