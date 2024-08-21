const arrayTitles = [];
    const getTheTitles = function(books) {
        books.forEach((element) =>
        arrayTitles.push(element.title));
        return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
