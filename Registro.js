// registro.js

// Captura los datos del formulario y gestiona el registro
document.getElementById('Registro').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passwordlog').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario registrado exitosamente");

            // Guardar información adicional del usuario en Firestore si es necesario
            return db.collection('usuarios').doc(user.uid).set({
                email: email,
                // Añadir más campos si es necesario
            });
        })
        .then(() => {
            console.log("Información adicional guardada en Firestore");
            // Redirigir al usuario o realizar alguna otra acción
        })
        .catch((error) => {
            console.error("Error al registrar usuario: ", error.message);
        });
});
