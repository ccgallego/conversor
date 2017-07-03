"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = conversor;
function conversor(src) {

	var kilolibra = 2.20462;
	var librakilo = 0.453592;
	var kilogramo = 1000;
	var gramoskilo = 0.001;

	//Masa

	function convertirLibkilo(libra) {
		var result = libra * librakilo;
		return console.log(libra + " lb son " + result + " kilogramos");
	}

	function convertirKilolib(kilos) {
		var result = kilos * kilolibra;
		return console.log(kilos + " kg son " + result + " libras");
	}

	function convertirKilogramos(kilos) {
		var result = kilos * kilogramo;
		return console.log(kilos + " kg son " + result + " gramos");
	}

	function convertirGramoskilo(gramos) {
		var result = gramos * gramoskilo;
		return console.log(gramos + " gr son " + result + " kilogramos");
	}
}