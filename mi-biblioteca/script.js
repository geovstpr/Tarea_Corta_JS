class Libro {
    constructor(titulo, autor, genero, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    info() {
        const estado = this.disponible ? "Disponible" : "Prestado";
        return `${this.titulo} de ${this.autor} (${this.anio}) - ${estado}`;
    }
}

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        const existe = this.libros.find(l => l.titulo === libro.titulo);
        if (existe) {
            console.error(`Error: "${libro.titulo}" ya está en la biblioteca.`);
        } else {
            this.libros.push(libro);
            console.log(`"${libro.titulo}" agregado correctamente.`)
        }
    }

    prestar(titulo) {
        const libro = this.libros.find(l => l.titulo === titulo);

        if (!libro) {
            throw new Error(`"${titulo}" no existe en la biblioteca.`);
        }

        if (!libro.disponible) {
            console.log(`"${titulo}" ya está prestado.`);
        } else {
            libro.disponible = false;
            console.log(`"${titulo}" prestado exitosamente.`);
        }
    }

    buscarPorGenero(genero) {
        return this.libros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
    }

    estadisticas() {
        const total = this.libros.length;
        const disponibles = this.libros.filter(l => l.disponible).length;
        const prestados = this.libros.filter(l => !l.disponible).length;

        console.log(`Estadísticas de "${this.nombre}":`);
        console.log(`Total de libros: ${total}`);
        console.log(`Disponibles: ${disponibles}`);
        console.log(`Prestados: ${prestados}`);
    }
}

// --- Pruebas ---

const miBiblioteca = new Biblioteca("Mi Biblioteca");

// 5 libros
miBiblioteca.agregarLibro(new Libro("Cien años de soledad", "García Márquez", "Ficción", 1967));
miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));
miBiblioteca.agregarLibro(new Libro("Breve historia del tiempo", "Stephen Hawking", "Ciencia", 1988));
miBiblioteca.agregarLibro(new Libro("Drácula", "Bram Stoker", "Terror", 1897));
miBiblioteca.agregarLibro(new Libro("Cosmos", "Carl Sagan", "Ciencia", 1980));

// Duplicado
miBiblioteca.agregarLibro(new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003));

// Prestar
try {
    miBiblioteca.prestar("Cien años de soledad");
    miBiblioteca.prestar("Cien años de soledad"); // ya prestado
} catch (error) {
    console.error("Error:", error.message);
}

// Buscar por género
const ciencia = miBiblioteca.buscarPorGenero("ciencia");
console.log("Libros de Ciencia:", ciencia.map(l => l.info()));

// Estadísticas
miBiblioteca.estadisticas();
