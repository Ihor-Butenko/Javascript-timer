// function hex(r, g, b){
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// function rgb(r, g, b){
// 	return `rgb(${r}, ${g}, ${b})`
// }

// // function makeColor(r, g, b) {
// // 	color = {}
// // 	color.r = r
// // 	color.g = g
// // 	color.b = b
// // 	color.rgb = function(){
// // 		const {r, g, b} = this
// // 		return `rgb(${r}, ${g}, ${b})`
// // 	}
// // 	color.hex = function(){
// // 		const {r, g, b} = this
// // 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// // 	}
// // 	return color
// // }


// // const firstColor = makeColor(15, 10, 8)

// function Color(r, g, b){
// 	this.r = r
// 	this.g = g
// 	this.b = b
// }

// Color.prototype.rgb = function(){
// 	const {r, g, b} = this
// 	return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function(){
// 	const {r, g, b} = this
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }

// const color1 = new Color(45, 10, 12)
// const color2 = new Color(56, 78, 3)

// console.log(color1)
// console.log(color2)

class Color {
	constructor(r, g, b, colorName){
		this.r = r
		this.g = g
		this.b = b
		this.name = colorName
	}
	hex(){
		const {r, g, b} = this
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
	}
	rgb(){
		const {r, g, b} = this
		return `rgb(${r}, ${g}, ${b})`
	}
	rgba(a = 1.0){
		return `rgba(${r}, ${g}, ${b}, ${a})`
	}
	RGBToHSL(){
		const {r, g, b} = this

		(this.r /= 255) (this.g /= 255) (this.b /= 255);
		const vmax = max(this.r, this.g, this.b), vmin = min(this.r, this.g, this.b);
		let h, s, l = (vmax + vmin) / 2;
		
		if (vmax === vmin) {
		  return [0, 0, l]; // achromatic
		}

		const d = vmax - vmin;
		s = l > 0.5 ? d / (2 - vmax - vmin) : d / (vmax + vmin);
		if (vmax === r) h = (g - b) / d + (g < b ? 6 : 0);
		if (vmax === g) h = (b - r) / d + 2;
		if (vmax === b) h = (r - g) / d + 4;
		h /= 6;

		this.h = h
		this.s = s
		this.l = l
	}
}
const c1 = new Color(45, 45, 45, 'darkGrey')
console.log(c1)