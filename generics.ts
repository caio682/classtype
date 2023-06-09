//generics
function concatArray <T> (...itens: T[]): T[] {
    return new Array().concat(...itens);
}
const numArray = concatArray<Number[]>([2,5], [3]);
const stgArray = concatArray<string[]>(["Felipe", "Caio"], ["V"])



console.log(numArray);
console.log(stgArray);