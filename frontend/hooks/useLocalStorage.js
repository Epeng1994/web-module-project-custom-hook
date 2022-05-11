import React, {useState} from 'react'


export default function useLocalStorage(key, initial){
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initial 
    })

    const setValue = e =>{
        setStoredValue(e)
        window.localStorage.setItem(key, JSON.stringify(e))
    }
    return [storedValue, setValue]
}