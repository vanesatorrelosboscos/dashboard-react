import { useRef } from 'react'
import useShortcut from '../../../hooks/useShortcut'
import { useState } from 'react'
import Input from "../../atoms/input/Input"

function SearchBar() {
    const searchInputRef = useRef(null)
    const [inputValue, setInputValue] = useState("")
    useShortcut('k', () => searchInputRef.current?.focus())

    return (
        <div className="relative flex items-center bg-(--surface2) py-1.5 px-3 rounded-(--radius) border border-solid border-(--border) h-8.75 w-55 transition-all duration-300 ease-in-out has-[input:focus]:border-(--primary) has-[input:focus]:w-75 max-[892px]:w-full max-[892px]:has-[input:focus]:w-full">
            <span>🔍</span>
            <Input
                placeholder="Search…"
                inputRef={searchInputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-transparent border-none text-(--text) py-2 px-2.5 text-sm w-full outline-none"
            />
            <span className="text-[12px] text-(--muted) border-none select-none max-[670px]:hidden">
                ⌘K
            </span>
        </div>
    )
}

export default SearchBar