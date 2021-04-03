function ResponsibilityChain(name) {
	this.name = name;
	this.nextAction = null;
	this.setNextAction = action => (this.nextAction = action);
	this.handle = function() {
		console.log(`${this.name} 审批`);
		if (this.nextAction != null) {
			this.nextAction.handle();
		}
	};
}

let r1 = new ResponsibilityChain("组长");
let r2 = new ResponsibilityChain("经理");
let r3 = new ResponsibilityChain("总监");
r1.setNextAction(r2);
r2.setNextAction(r3);
r1.handle();