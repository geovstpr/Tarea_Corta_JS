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
const libroPrueba = new Libro("Dracula", "Bram Stoker", "Terror", 1897);

console.log(libroPrueba.info());