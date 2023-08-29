import React from 'react'

const NoFavorites = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        height: 'calc(100vh-100px)',
        justifyContent: "center",
        alignSelf: 'center'
    }}>
        <h1>No hay favoritos</h1>
    </div>
  )
}

export default NoFavorites