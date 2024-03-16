function confirmDelete() {
    if (confirm("¿Está seguro de que quieres eliminar este usuario?")) {
        alert("El usuario ha sido eliminado.");
    } else {
        alert("Acción cancelada.");
    }
}