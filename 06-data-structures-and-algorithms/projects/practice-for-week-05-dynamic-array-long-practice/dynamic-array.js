class DynamicArray {

  constructor(defaultSize = 4) {

    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    // it should find the leftmost empty spot
    // put the `val` there
    // if there was no empty spot, resize the array

    if(this.length === this.capacity) {
      this.resize();
    }

    for(let i = 0; i < this.capacity; i++) {
      // if empty spot, fill it in
      if(this.data[i] === undefined) {
        this.data[i] = val;
        this.length++;
        return;
      }
    }


  }


  pop() {
    // find the rightmost value
    // replace it with undefined
    // return the remove value

    for(let i = this.capacity-1; i >= 0; i--){
      if(this.data[i] !== undefined) {
        let value = this.data[i];
        this.data[i] = undefined;
        this.length--;
        return value;
      }
    }
  }

  shift() {

    if(this.length === 0) {
      return undefined;
    }

    let shifted = this.data[0];

    for(let i = 0; i < this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    this.data[this.length-1] = undefined;
    this.length--;
    return shifted;
  }

  unshift(val) {
    // if maxed out, resize
    // starting from last empty space, copy elements before it
    // replace the first place with the provided value

    if(this.length === this.capacity) {
      this.resize();
    }

    for(let i = this.length; i >= 0; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    let biggerArray = new Array(this.capacity);

    for(let i = 0; i < this.length; i++){
      biggerArray[i] = this.data[i];
    }
    this.data = biggerArray;

  }

}


module.exports = DynamicArray;
