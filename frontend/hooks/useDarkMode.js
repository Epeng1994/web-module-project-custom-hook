import React ,{useState}from 'react'
import useLocalStorage from './useLocalStorage.js'

export default function useDarkMode(input, initial) {
    const [darkMode, setDarkMode] = useLocalStorage(input, initial)
    const handleDarkMode = e =>{
        setDarkMode(e)
    }

    return [darkMode, handleDarkMode]


}