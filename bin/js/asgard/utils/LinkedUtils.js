var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var NodeTYpe;
        (function (NodeTYpe) {
            NodeTYpe[NodeTYpe["First"] = 0] = "First";
            NodeTYpe[NodeTYpe["Data"] = 1] = "Data";
            NodeTYpe[NodeTYpe["Last"] = 2] = "Last";
        })(NodeTYpe || (NodeTYpe = {}));
        var LinkedNode = /** @class */ (function () {
            function LinkedNode(nodetype) {
                this._nodeType = nodetype;
                this.Data = null;
                this.PreNode = null;
                this.NextNode = null;
            }
            Object.defineProperty(LinkedNode.prototype, "NodeType", {
                get: function () {
                    return this._nodeType;
                },
                enumerable: true,
                configurable: true
            });
            return LinkedNode;
        }());
        var SimpleQueue = /** @class */ (function () {
            function SimpleQueue() {
                this._firstNode = new LinkedNode(NodeTYpe.First);
                this._lastNode = new LinkedNode(NodeTYpe.Last);
                this._firstNode.NextNode = this._lastNode;
                this._lastNode.PreNode = this._firstNode;
                this._count = 0;
                this._pool = new Array(SimpleQueue._POOL_SIZE);
                this._poolCount = 0;
            }
            Object.defineProperty(SimpleQueue.prototype, "Count", {
                get: function () {
                    return this._count;
                },
                enumerable: true,
                configurable: true
            });
            SimpleQueue.prototype._applyFreeNode = function () {
                var result = null;
                for (var i = 0; !result && i < SimpleQueue._POOL_SIZE; i++) {
                    if (this._pool[i]) {
                        result = this._pool[i];
                        this._pool[i] = null;
                        this._poolCount--;
                    }
                }
                if (!result) {
                    result = new LinkedNode(NodeTYpe.Data);
                }
                return result;
            };
            SimpleQueue.prototype._reclaimNode = function (node) {
                if (!node || this._poolCount >= SimpleQueue._POOL_SIZE)
                    return;
                node.Data = null;
                node.NextNode = null;
                node.PreNode = null;
                for (var i = 0; node && i < SimpleQueue._POOL_SIZE; i++) {
                    if (!this._pool[i]) {
                        this._pool[i] = node;
                        this._poolCount++;
                        node = null;
                    }
                }
            };
            SimpleQueue.prototype.enqueue = function (data) {
                if (!data)
                    return;
                var newNode = this._applyFreeNode();
                newNode.Data = data;
                newNode.PreNode = this._lastNode.PreNode;
                newNode.NextNode = this._lastNode;
                this._lastNode.PreNode.NextNode = newNode;
                this._lastNode.PreNode = newNode;
                this._count++;
            };
            SimpleQueue.prototype.dequeue = function () {
                if (this._count <= 0)
                    return;
                var dataNode = this._firstNode.NextNode;
                var data = dataNode.Data;
                dataNode.NextNode.PreNode = this._firstNode;
                this._firstNode.NextNode = dataNode.NextNode;
                this._count--;
                this._reclaimNode(dataNode);
                return data;
            };
            SimpleQueue._POOL_SIZE = 4;
            return SimpleQueue;
        }());
        utils.SimpleQueue = SimpleQueue;
        var SimpleList = /** @class */ (function () {
            function SimpleList() {
                this._firstNode = new LinkedNode(NodeTYpe.First);
                this._lastNode = new LinkedNode(NodeTYpe.Last);
                this._firstNode.NextNode = this._lastNode;
                this._lastNode.PreNode = this._firstNode;
                this._count = 0;
                this._pool = new Array(SimpleList._POOL_SIZE);
                this._poolCount = 0;
            }
            SimpleList.prototype.clear = function () {
                var dataNode = this._firstNode.NextNode;
                var nextNode;
                while (dataNode.NodeType != NodeTYpe.Last) {
                    nextNode = dataNode.NextNode;
                    nextNode.PreNode = dataNode.PreNode;
                    dataNode.PreNode.NextNode = nextNode;
                    this._reclaimNode(dataNode);
                    this._count--;
                    dataNode = nextNode;
                }
            };
            Object.defineProperty(SimpleList.prototype, "Count", {
                get: function () {
                    return this._count;
                },
                enumerable: true,
                configurable: true
            });
            SimpleList.prototype._applyFreeNode = function () {
                var result = null;
                for (var i = 0; !result && i < SimpleList._POOL_SIZE; i++) {
                    if (this._pool[i]) {
                        result = this._pool[i];
                        this._pool[i] = null;
                        this._poolCount--;
                    }
                }
                if (!result) {
                    result = new LinkedNode(NodeTYpe.Data);
                }
                return result;
            };
            SimpleList.prototype._reclaimNode = function (node) {
                if (!node || this._poolCount >= SimpleList._POOL_SIZE)
                    return;
                node.Data = null;
                node.NextNode = null;
                node.PreNode = null;
                for (var i = 0; node && i < SimpleList._POOL_SIZE; i++) {
                    if (!this._pool[i]) {
                        this._pool[i] = node;
                        this._poolCount++;
                        node = null;
                    }
                }
            };
            SimpleList.prototype.add = function (data) {
                if (!data)
                    return;
                var newNode = this._applyFreeNode();
                newNode.Data = data;
                newNode.PreNode = this._lastNode.PreNode;
                newNode.NextNode = this._lastNode;
                this._lastNode.PreNode.NextNode = newNode;
                this._lastNode.PreNode = newNode;
                this._count++;
            };
            SimpleList.prototype.getFirstData = function () {
                if (this._count > 0) {
                    var dataNode = this._firstNode.NextNode;
                    return dataNode.Data;
                }
                return null;
            };
            SimpleList.prototype.getLastData = function () {
                if (this._count > 0) {
                    var dataNode = this._lastNode.PreNode;
                    return dataNode.Data;
                }
                return null;
            };
            SimpleList.prototype.getDataAt = function (idx) {
                if (idx < 0 || idx >= this._count)
                    return null;
                var dataNode = this._firstNode.NextNode;
                while (idx > 0) {
                    dataNode = dataNode.NextNode;
                    idx--;
                }
                return dataNode.Data;
            };
            SimpleList.prototype.removeAt = function (idx) {
                if (idx < 0 || idx >= this._count)
                    return null;
                var dataNode = this._firstNode.NextNode;
                while (idx > 0) {
                    dataNode = dataNode.NextNode;
                    idx--;
                }
                var data = dataNode.Data;
                dataNode.NextNode.PreNode = dataNode.PreNode;
                dataNode.PreNode.NextNode = dataNode.NextNode;
                this._count--;
                this._reclaimNode(dataNode);
                return data;
            };
            SimpleList.prototype.scan = function (caller, procss) {
                if (this._count <= 0)
                    return;
                var args = new Array(1);
                var preNode;
                var dataNode = this._firstNode.NextNode;
                while (dataNode.NodeType == NodeTYpe.Data) {
                    args[0] = dataNode.Data;
                    if (!procss.apply(caller, args)) {
                        preNode = dataNode.PreNode;
                        dataNode.NextNode.PreNode = dataNode.PreNode;
                        dataNode.PreNode.NextNode = dataNode.NextNode;
                        this._count--;
                        this._reclaimNode(dataNode);
                    }
                    else {
                        preNode = dataNode;
                    }
                    dataNode = preNode.NextNode;
                }
            };
            SimpleList.prototype.search = function (caller, procss, param) {
                if (this._count <= 0)
                    return null;
                var result = null;
                var args = new Array(2);
                var dataNode = this._firstNode.NextNode;
                while (!result && dataNode.NodeType == NodeTYpe.Data) {
                    args[0] = dataNode.Data;
                    args[1] = param;
                    if (procss.apply(caller, args)) {
                        result = dataNode.Data;
                    }
                    dataNode = dataNode.NextNode;
                }
                return result;
            };
            SimpleList.prototype.reverseSearch = function (caller, procss) {
                if (this._count <= 0)
                    return null;
                var result = null;
                var args = new Array(1);
                var dataNode = this._lastNode.PreNode;
                while (!result && dataNode.NodeType == NodeTYpe.Data) {
                    args[0] = dataNode.Data;
                    if (procss.apply(caller, args)) {
                        result = dataNode.Data;
                    }
                    dataNode = dataNode.PreNode;
                }
                return result;
            };
            SimpleList._POOL_SIZE = 4;
            return SimpleList;
        }());
        utils.SimpleList = SimpleList;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=LinkedUtils.js.map