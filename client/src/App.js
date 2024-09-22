document.addEventListener('DOMContentLoaded', () => {
    const app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);

    // Import and render components
    import('./components/Header.js');
    import('./components/Footer.js');

    // Import and render pages based on the current route
    const path = window.location.pathname;
    switch (path) {
        case '/':
            import('./pages/Home.js');
            break;
        case '/education-modules':
            import('./pages/EducationModules.js');
            break;
        case '/forum':
            import('./pages/Forum.js');
            break;
        case '/news':
            import('./pages/News.js');
            break;
        case '/resources':
            import('./pages/Resources.js');
            break;
        case '/login':
            import('./pages/Login.js');
            break;
        default:
            import('./pages/Home.js');
    }
});
