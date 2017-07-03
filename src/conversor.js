export default function conversor(src){

const kilolibra = 2.20462
const librakilo= 0.453592
const kilogramo=1000
const gramoskilo = 0.001

//Masa

function convertirLibkilo(libra){
	let result = libra*librakilo
	return console.log(`${libra} lb son ${result} kilogramos`)
}

function convertirKilolib(kilos){
	let result =  kilos*kilolibra
	return console.log(`${kilos} kg son ${result} libras`)
}

function convertirKilogramos(kilos){
	let result = kilos*kilogramo
	return console.log(`${kilos} kg son ${result} gramos`)
}

function convertirGramoskilo(gramos){
	let result = gramos*gramoskilo
	return console.log(`${gramos} gr son ${result} kilogramos`)
}
}
