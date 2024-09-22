document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    main.innerHTML = 
        <h1>Login</h1>
        <form id="login-form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
    ;
    document.body.appendChild(main);
});
