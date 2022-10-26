import React, { useState, useEffect } from 'react'

const useNavBar = (defaultState = false) => {
    const [isNavOpen, setIsNavOpen] = useState(defaultState);
    const openNav = () => setIsNavOpen(true);
    const closeNav = () => setIsNavOpen(false);
    const toggleNav = () => setIsNavOpen(!toggle);

    return { openNav, closeNav, toggleNav, isNavOpen }
}

export default useNavBar