const mediaSimples = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Simples: ${mediaSimples(36, 46, 610, 93)}`)
alert("Babel funcionando com sucesso...")