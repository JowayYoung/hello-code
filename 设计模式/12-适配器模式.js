function Adapter() {
	this.open = () => new BaiduMap().show();
}

function GoogleMap() {
	this.open = () => "Open The GoogleMap";
}

function BaiduMap() {
	this.show = () => "Open The BaiduMap";
}

function RenderMap(map) {
	return map.open();
}

const b = new Adapter();
const g = new GoogleMap();
const rb = RenderMap(b);
const rg = RenderMap(g);

console.log(rb);
console.log(rg);