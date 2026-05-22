import { useRef } from 'react'
import useShortcut from '../../hooks/useShortcut'

function SearchBar() {
    const searchInputRef = useRef(null)
    useShortcut('k', () => searchInputRef.current?.focus())

    return (
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input id="globalSearch" type="text" placeholder="Search… " ref={searchInputRef}/>
            <span className="kbd">⌘K</span>
        </div>
    )
}

export default SearchBar