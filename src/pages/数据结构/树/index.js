function Tree (root) {
    this.rootNode = root
}

let obj = {
    getRoot: function () {
        return this.rootNode
    },
    find: function (needValue) {
        let now = this.getRoot()
        let findOne
        function findNext(node) {
            if (!node.children || !node.children.length) {
                if (node.value === needValue) {
                    findOne = node
                }
                return node.value === needValue
            } else {
                let findIt = node.children.find(findNext)
                return findIt
            }
        }
        findNext(now)
        return findOne
    },
    next: function () {

    }
}

Tree.prototype = obj

function TreeNode({fatherNode, value, children}) {
    this.fatherNode = fatherNode
    fatherNode && (fatherNode.children.push(this))
    this.value = value
    this.children = []
}



let base = new TreeNode({
    fatherNode: undefined,
    value: 'b1',
    children: undefined
})
let f1 = new TreeNode({
    fatherNode: base,
    value: 'f1',
    children: undefined
})
let c1 = new TreeNode({
    fatherNode: f1,
    value: 'c1',
    children: undefined
})
let c2 = new TreeNode({
    fatherNode: f1,
    value: 'c2',
    children: undefined
})
let t1 = new Tree(base)

let root = t1.getRoot()
console.log(root)
let findOne = t1.find('c2')
console.log(findOne)