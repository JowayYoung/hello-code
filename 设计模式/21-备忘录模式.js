// 备忘类
function Memento(content) {
	this.content = content;
	this.getContent = () => this.content;
}

// 备忘列表
function MementoList() {
	this.list = [];
	this.add = memento => this.list.push(memento);
	this.get = i => this.list[i];
}

// 编辑器
function Editor() {
	this.content = null;
	this.getContent = () => this.content;
	this.setContent = content => (this.content = content);
	this.saveContentToMemento = () => new Memento(this.content);
	this.getContentFromMemento = memento => (this.content = memento.getContent());
}

const ml = new MementoList();
const e = new Editor();

e.setContent("111");
e.setContent("222");
ml.add(e.saveContentToMemento());
e.setContent("333");
ml.add(e.saveContentToMemento());
e.setContent("444");

console.log(e.getContent());
e.getContentFromMemento(ml.get(1));
console.log(e.getContent());

e.getContentFromMemento(ml.get(0));
console.log(e.getContent());