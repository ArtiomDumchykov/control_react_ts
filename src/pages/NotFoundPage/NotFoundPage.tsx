import React from 'react'

export  function NotFoundPage() {
    return (
        <div
            style={{
                display: "flex",
                flex: "1 1 100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1
                style={{
                    fontSize: "56px",
                    fontWeight: "600"
                }}
            >
                404
            </h1>
            <div
                style={{
                    fontSize: "28px"
                }}
            >
                NotFoundPage
            </div>
        </div>
    )
}
