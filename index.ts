// index.ts

type User = {
    id: number;
    name: string;
    email: string;
};

let users: User[] = [];
let currentId = 1;

// Crear un nuevo usuario
function createUser(name: string, email: string): User {
    const newUser: User = { id: currentId++, name, email };
    users.push(newUser);
    return newUser;
}

// Leer todos los usuarios
function readUsers(): User[] {
    return users;
}

// Actualizar un usuario
function updateUser(id: number, name: string, email: string): User | null {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { id, name, email };
        return users[userIndex];
    }
    return null; // Usuario no encontrado
}

// Eliminar un usuario
function deleteUser(id: number): boolean {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true; // Eliminado con éxito
    }
    return false; // Usuario no encontrado
}

// Ejemplo de uso
console.log('Crear usuarios:');
console.log(createUser('Juan Perez', 'juan@example.com'));
console.log(createUser('Maria Gomez', 'maria@example.com'));

console.log('\nLeer usuarios:');
console.log(readUsers());

console.log('\nActualizar usuario:');
console.log(updateUser(1, 'Juan Pérez Actualizado', 'juan.actualizado@example.com'));

console.log('\nLeer usuarios después de la actualización:');
console.log(readUsers());

console.log('\nEliminar usuario:');
console.log(deleteUser(2)); // Eliminar usuario con id 2

console.log('\nLeer usuarios después de la eliminación:');
console.log(readUsers());
