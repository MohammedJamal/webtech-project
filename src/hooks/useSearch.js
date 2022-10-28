import React, { useState, useEffect } from 'react'

const useSearch = (defaultState = false) => {
    const [isSearchOpen, setIsSearchOpen] = useState(defaultState);
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return { openSearch, closeSearch, toggleSearch, isSearchOpen }
}

export default useSearch