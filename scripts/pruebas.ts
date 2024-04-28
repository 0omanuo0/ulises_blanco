const data = require("../app/lib/placeholder-data.js");

type Cuadro = {
    id: number;
    titulo: string;
    coleccion: string;
    año: number;
    dimensiones: string;
    descripcion: string;
    material: string;
    imgpath: string;
}

function main() {
    const dimensiones:number[] = data.cuadros.map(
            (item: Cuadro) => parseFloat(item.dimensiones.split("x")[0])/ parseFloat(item.dimensiones.split("x")[1])
        );

    // get the top 25% of the data
    const sorted = dimensiones.sort((a: number, b: number) => a - b);
    const top25 = sorted.slice(Math.floor(sorted.length * 0.65));
    const mean = top25.reduce((a: number, b: number) => a + b) / top25.length;

    console.log(sorted);
    console.log(top25, "mean: ", mean);

}


main();