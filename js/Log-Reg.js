/*
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar los datos del formulario de inicio de sesión al servidor.
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar los datos del formulario de registro al servidor.
});

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

function closeModal() {
  const modal = document.getElementById('forgotPasswordModal');
  modal.style.display = 'none';
}

// Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', (event) => {
  const modal = document.getElementById('forgotPasswordModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('forgotPasswordModal');
  modal.style.display = 'block';
});

const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Implementar la lógica para enviar el código de recuperación al email ingresado.
  closeModal();
});
// ... Código anterior ...

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('forgotPasswordModal');
    modal.style.display = 'block';
  });
  
  // ... Resto del código ...
*/









//  ↓  En lo que sigue abajo, son los scripts nuevos introducidos para cumplir con
//  los requerimientos del documento "prototipo_Registro_1.0.1.pdf"










// CODIGOS PARA LANZAR AVISO DE ERROR EN CASO DE INTRODUCIRSE ALGUN
// CARACTER NO PERMITIDO


// Lanzamos la acción sólo si existe el elemento con id específico
if (document.getElementById("name")) {  // Seleccionamos el elemento por su id
                                        // y verificamos si existe

  // Aquí comienza la acción para generar el aviso de error
  var errorName = document.getElementById('errorName');

  // Agregar un listener al primer campo de texto
  document.getElementById('name').addEventListener('input', function() {
    // Obtener el valor del campo
    var valorCampo = this.value;

    // Verificar si el valor contiene un carácter no permitido
    if (/[^a-zA-Zá-úÁ-Úä-üÄ-ÜñÑ\s]/.test(valorCampo)) {
      // Mostrar un mensaje de error
      errorName.textContent = 'Sólo 4 a 16 letras mayúsculas, minúsculas, con acento o con diéresis';
    } else {
      // Limpiar el mensaje de error si el valor es válido
      errorName.textContent = '';
    }
  });
}




if (document.getElementById("surname")) {
  var errorSurname = document.getElementById('errorSurname');

  document.getElementById('surname').addEventListener('input', function() {
    var valorCampo = this.value;

    if (/[^a-zA-Zá-úÁ-Úä-üÄ-ÜñÑ\s]/.test(valorCampo)) {
      errorSurname.textContent = 'Sólo 4 a 16 letras mayúsculas, minúsculas, con acento o con diéresis';
    } else {
      errorSurname.textContent = '';
    }
  });
}




if (document.getElementById("telefono")) {
  var errorTelefono = document.getElementById('errorTelefono');

  document.getElementById('telefono').addEventListener('input', function() {
    var valorCampo = this.value;

    if (/[^0-9]/.test(valorCampo)) {
      errorTelefono.textContent = 'Sólo 6 a 12 números del cero al nueve';
    } else {
      errorTelefono.textContent = '';
    }
  });
}




if (document.getElementById("email")) {
  var errorEmail = document.getElementById('errorEmail');

  document.getElementById('email').addEventListener('input', function() {
    var valorCampo = this.value;

    if (/[^a-zA-Z0-9-@._]/.test(valorCampo)) {
      errorEmail.textContent = 'Sólo letras, números, puntos, guión y guión bajo';
    } else {
      errorEmail.textContent = '';
    }
  });
}











// CODIGO PARA VISUALIZAR U OCULTAR LAS CONTRASEÑAS
function togglePasswordVisibility(inputId, spanId) {
  const passwordInput = document.getElementById(inputId);
  const toggleIcon = document.getElementById(spanId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.innerHTML = '<i class="ojo_tachado fa fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    toggleIcon.innerHTML = '<i class="ojo_abierto fa fa-eye"></i>';
  }
}










// CODIGO PARA VALIDAR QUE LAS CONTRASEÑAS INGRESADAS SON IGUALES
function validarContrasIguales() {
  var contrasena = document.getElementById('password').value;
  var repetirContrasena = document.getElementById('rep_password').value;

  if (contrasena !== repetirContrasena) {
    // Emite una alerta si las contraseñas no coinciden
    alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    // Evita que se envíe el formulario si las contraseñas no coinciden
    return false;
  }

  // Envía el formulario si las contraseñas coinciden
  return true;
}
