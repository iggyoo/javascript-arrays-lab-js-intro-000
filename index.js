var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
kittens.push("Ralph");
}

function destructivelyPrependKitten() {
["Bob", ...kittens]
}
