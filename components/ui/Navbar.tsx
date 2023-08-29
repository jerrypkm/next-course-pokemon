import React from 'react'
import { Link } from "@nextui-org/react";

const Navbar = () => {

    return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
        backgroundColor: '#2b2b2b',
        height: "50px",
    }}>
        <Link style={{color: "#f2f2f2", fontSize: "42px"}} href="/" >Pokemon</Link>
        <Link style={{color: "#f2f2f2"}} href="/favorites">Favoritos</Link>
    </div>
  )
}

export default Navbar