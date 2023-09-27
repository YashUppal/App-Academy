class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {

    if((this.count / this.capacity) >= 0.7) {
      this.resize();
    }

    let index = this.hashMod(key);
    let newPair = new KeyValuePair(key, value);

    // if node already exists at the index
    // check to find opportunity to update existing key
    // else add the new node to the linkedlist

    if(this.data[index]) {
      let current = this.data[index];

      while(current) {
        if(current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }

      current = this.data[index];
      this.data[index] = newPair;
      newPair.next = current;
      this.count++;
    } else {
      this.count++;
      this.data[index] = newPair;
    }
  }


  read(key) {
    let index = this.hashMod(key);
    let current = this.data[index];

    if(current) {
      while(current) {
        if(current.key === key) {
          return current.value;
        }
        current = current.next;
      }
    }
  }


  resize() {
    // create a new array with double the current capacity
    // iterate over each bucket of current list and find a new bucket for the nodes
    // in the new list
    // swap the current list with new list
    this.capacity *= 2;
    let resized = new Array(this.capacity).fill(null);
    let oldData = this.data.slice();
    this.data = resized;
    this.count = 0;

    for(let i = 0; i < oldData.length; i++){
      if(oldData[i]) {

        let current = oldData[i];

        while(current) {

          this.insert(current.key, current.value);

          current = current.next;
        }

      }
    }
  }


  delete(key) {

    // look at the right index
    // delete that node from the linked list

    let index = this.hashMod(key);

    if(this.data[index]) {
      let current = this.data[index];
      let prev = null;
      while(current) {

        if(current.key === key) {
          if(prev === null) {
            // if its the first node in linked list
            this.data[index] = this.data[index].next;
            this.count--;
            return;
          }
          prev.next = current.next;
          this.count--;
          return;
        }

        prev = current;
        current = current.next;
      }
    }

    return "Key not found";
  }
}


module.exports = HashTable;
