document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.innerHTML = 
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/education-modules">Education Modules</a></li>
                <li><a href="/forum">Forum</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    ;
    document.body.appendChild(header);
});
