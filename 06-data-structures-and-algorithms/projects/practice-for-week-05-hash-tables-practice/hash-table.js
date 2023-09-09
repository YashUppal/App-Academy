const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).slice(0,8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let hashIndex = this.hashMod(key);
    let kvPair = new KeyValuePair(key, value);

    if(this.data[hashIndex]) {
      throw new Error(`hash collision or same key/value pair already exists!`);
    }

    this.data[hashIndex] = kvPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let hashIndex = this.hashMod(key);
    let kvPair = new KeyValuePair(key, value);
    this.count++;

    if(this.data[hashIndex]) {
      let currentData = this.data[hashIndex];
      this.data[hashIndex] = kvPair;
      kvPair.next = currentData;
    } else {
      this.data[hashIndex] = kvPair;
    }
  }

  insert(key, value) {
    let newKVPair = new KeyValuePair(key, value);
    let hashIndex = this.hashMod(key);

    if(this.data[hashIndex]) {

      let current = this.data[hashIndex];

      while(current) {
        if(current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }

      current = this.data[hashIndex];
      this.data[hashIndex] = newKVPair;
      newKVPair.next = current;
    } else {
      this.data[hashIndex] = newKVPair;
    }

    this.count++;
  }

}


module.exports = HashTable;
