class Sorter {
  constructor() {
    this.store = [];
    this.functionForSort = function(a, b) {
      return a - b;
    }
  }

  add(element) {
    this.store.push(element);
    return this;
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    indices = indices.sort((a, b) => a - b);

    for(let i = 0; i < indices.length - 1; i++) {
      for(let j = i + 1; j < indices.length; j++) {
        if(this.functionForSort(this.store[indices[i]], this.store[indices[j]]) > 0) {
          let tmp = this.store[indices[i]];
          this.store[indices[i]] = this.store[indices[j]];
          this.store[indices[j]] = tmp;
        }
      }
    }
    return this;
  }

  setComparator(compareFunction) {
    this.functionForSort = compareFunction;
    return this;
  }
}

module.exports = Sorter;