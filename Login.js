// login.js

// Captura los datos del formulario y gestiona el inicio de sesión
document.getElementById('Login').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passwordlog').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Inicio de sesión exitoso");
            // Redirigir a la página principal o realizar alguna acción
        })
        .catch((error) => {
            console.error("Error al iniciar sesión: ", error.message);
        });
});
