import React , { useState , useEffect } from 'react'

const useSubNavBar = (defaultState = false) => {
    const [isSubNavOpen, setIsSubNavOpen] = useState(defaultState);
    const openSubNav = () => setIsSubNavOpen(true);
    const closeSubNav = () => setIsSubNavOpen(false);
    const toggleSubNav = () => setIsSubNavOpen(!isSubNavOpen);

    return { openSubNav, closeSubNav, toggleSubNav, isSubNavOpen }
}

export default useSubNavBar