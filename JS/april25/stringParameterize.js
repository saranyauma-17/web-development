const stringParameterize = (str) => {
    return (str.toLowerCase()).replaceAll(' ','-');
}
console.log(stringParameterize("Robin Singh from USA."));