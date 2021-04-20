function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const tree = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
tree.left = b;
tree.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(JSON.stringify(tree, null, 2));

// 先序遍历：根结点→左子树→右子树
function Preorder(root) {
	if (!root) return;
	console.log("当前遍历的结点值：", root.val);
	Preorder(root.left);
	Preorder(root.right);
}

// 中序遍历：左子树→根结点→右子树
function Inorder(root) {
	if (!root) return;
	Inorder(root.left);
	console.log("当前遍历的结点值：", root.val);
	Inorder(root.right);
}

// 后序遍历：左子树→右子树→根结点
function Postorder(root) {
	if (!root) return;
	Postorder(root.left);
	Postorder(root.right);
	console.log("当前遍历的结点值：", root.val);
}

Preorder(tree);
Inorder(tree);
Postorder(tree);