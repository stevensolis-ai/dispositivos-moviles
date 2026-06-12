function validarAcceso() {
    const userEl = document.getElementById('usuario');
    const passEl = document.getElementById('password');
    const mensaje = document.getElementById('mensaje-error');

    if (!userEl || !passEl) {
        console.error('No se encontraron los campos de usuario o contraseña.');
        return;
    }

    const user = userEl.value.trim();
    const pass = passEl.value.trim();

    const usuarioCorrecto = "admin";
    const passwordCorrecto = "1234";
    const usuarioCorrecto1 = "admin2";
    const passwordCorrecto1 = "12345";

    if (user === usuarioCorrecto && pass === passwordCorrecto) {
        window.location.href = "Jeff.html";
    } else if (user === usuarioCorrecto1 && pass === passwordCorrecto1) {
        window.location.href = "asdasd.html";
    } else {
        if (mensaje) {
            mensaje.innerText = "Usuario o contraseña incorrectos. Intenta de nuevo.";
        }
    }
}