document.addEventListener('DOMContentLoaded', (event) => {
    const [red, green, blue] = [150, 200, 255]
    const footer = document.querySelector('footer')
    
    window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY) / 255
        y = y < 1 ? 1 : y
        const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
        footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
})

