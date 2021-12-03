function matchFull(str) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let newArr = str.match(regEx);
    console.log(newArr.join(' '));
}

matchFull('Ivan Ivanov, ivan ivanov, Ivan Ovanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov')
