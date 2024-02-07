'use client'

function DarkMode() {
    return (
        <div className="dark:text-white">
            <button onClick={() => {
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark")
                } else {
                    document.documentElement.classList.add("dark")
                }
            }}>Dark</button>
        </div>
    )
}

export default DarkMode