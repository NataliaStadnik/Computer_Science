// Бинарное дерево - это структура данных, где каждый узел  также является деревом - у каждого узла может быть 2 потомка.
// если добавляемое в дерево значение меньше по значению чем текущий угол,
// то значение уходит в левое поддерево, если больше, то уходит в правое - правая часть поддерева выстраивается с большими
// значениями, а левая с меньшими.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);

      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }

      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(61);
tree.add(2);
tree.add(12);
tree.print();
