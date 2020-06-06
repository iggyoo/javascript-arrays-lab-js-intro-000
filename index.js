var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
kittens.push("Ralph");
}

function destructivelyPrependKitten() {
kittens.unshift("Bob");
}

function  destructivelyRemoveLastKitten() {
kittens.pop("Garfield");
}

function destructivelyRemoveFirstKitten() {
kittens.shift("Milo");
}

function appendKitten() {
return [...kittens, "Broom"]
}

function prependKitten() {
}
