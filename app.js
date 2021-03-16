// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];

// 1b
function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
}

seeDinos(`Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
function seeCharacters({ ellieSattler }) {
    console.log(ellieSattler);
}

seeCharacters(jPCharacters);

// 3a
const jurassicParkMovies = [
    {
        one: `Jurassic Park`,
        two: `The Lost World: Jurassic Park`,
        three: `Jurassic Park III`
    },
    { four: `Jurassic World`,
    five: `Jurassic World: Fallen Kingdom`}
];
console.log(jurassicParkMovies);
console.log("===========");
// 3b
function seeJPMovies ([{one, two, three},{four, five}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);

}

seeJPMovies(jurassicParkMovies,jurassicParkMovies);

console.log("===========");



