import { useRef } from 'react'
import useShortcut from '../../hooks/useShortcut'
import { useState } from 'react'
import Input from '../ui/Input'

function SearchBar() {
    const searchInputRef = useRef(null)
    const [inputValue, setInputValue] = useState("")
    useShortcut('k', () => searchInputRef.current?.focus())

    return (
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <Input
                id="globalSearch"
                placeholder="Search…"
                inputRef={searchInputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <span className="kbd">⌘K</span>
        </div>
    )
}

export default SearchBar