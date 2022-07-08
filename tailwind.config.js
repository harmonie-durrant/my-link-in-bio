
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,tsx}',
        './components/**/*.{js,tsx}',
    ],
    purge: [
        './pages/**/*.{js,tsx}',
        './components/**/*.{js,tsx}',
    ],
    theme: {
        screens: {
            'mobile': '375px',
            'tablet': '768px',
            'desktop': '1024px',
        },
        extend: {},
    },
    variants: {
        // backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        extend: {},
    },
    plugins: []
}
