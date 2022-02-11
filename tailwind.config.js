module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: [
                    'Geometria',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
            },
            colors: {
                gray: {
                    darkest: '#262626',
                    DEFAULT: '#C4C4C4',
                },
                accent: {
                    DEFAULT: '#B3976E',
                },
            },
            flex: {
                '1-100': '1 1 100%',
            },
            fontSize: {
                '10xl': '10rem',
                '12xl': '12rem',
                '14xl': '14rem',
                '16xl': '16rem',
                '18xl': '18rem',
                '20xl': '20rem',
            },
            spacing: {
                15: '3.75rem',
                '1/10': '10%',
                '3/20': '15%',
                '1/5': '20%',
            },
        },
    },
    plugins: [],
}
