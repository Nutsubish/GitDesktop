Array.prototype.filterMethodPrototype = function(callback) {
    var filteredArray = [];
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };


