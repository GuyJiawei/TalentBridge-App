const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#inputEmail").value.trim();
    const password = document.querySelector("#inputPassword").value.trim();

    if (email && password) {
        const response = await fetch("/api/user/login"), {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers
        }
    }
}