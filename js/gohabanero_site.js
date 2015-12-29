//gohabanero_site.js
$.Color.hook("fill stroke");

var Flavor = {};
Flavor.state =  0;
Flavor.el = {
	logo: "#logo",
	text: ".orange_text",
	name: "#flavor",
	btn: ".btn"
};
Flavor.flavors = [
	{
		color: "orange",
		lt_hex: "#E08D26",
		dk_hex: "#c97c1d",
		name: "Sweet Peach"
	},
	{
		color: "red",
		lt_hex: "#cc0000",
		dk_hex:"#990000",
		name: "Hot 'n Fresh"
	},
	{
		color: "green",
		lt_hex: "#008900",
		dk_hex:"#006600",
		name: "Jalpeno Pear"
	}
];

Flavor.rotate = function(){
	
	setTimeout(function(){
		if (this.state < this.flavors.length) {
			//SVG
			$(this.el.logo).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			$(this.el.text).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			
			//Buttons
			$(this.el.btn).animate({
				"backgroundColor": this.flavors[this.state].lt_hex,
				"borderBottomColor": this.flavors[this.state].dk_hex
			}, 2000);

			this.state++;

			this.rotate();
		} else {
			this.state = 0;
			//SVG
			$(this.el.logo).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			$(this.el.text).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			
			//Buttons
			$(this.el.btn).animate({
				"backgroundColor": this.flavors[this.state].lt_hex,
				"borderBottomColor": this.flavors[this.state].dk_hex
			}, 2000);

			this.state++;

			this.rotate();
		}
	}.bind(this), 10000);
}

Flavor.rotate();