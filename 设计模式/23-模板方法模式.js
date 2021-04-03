function TemplateMethod({ addCondiment, brewDrink }) {
	this.addCondiment = addCondiment;
	this.brewDrink = brewDrink;
	this.boilWater = () => console.log("共用：烧开水");
	this.pourCup = () => console.log("共用：倒杯子");
	this.init = () => {
		this.boilWater();
		this.brewDrink();
		this.pourCup();
		this.addCondiment();
	};
}

/* 咖啡 */
const coffee = new TemplateMethod({
	addCondiment: () => console.log("加点奶糖"),
	brewDrink: () => console.log("冲泡咖啡")
});
coffee.init();