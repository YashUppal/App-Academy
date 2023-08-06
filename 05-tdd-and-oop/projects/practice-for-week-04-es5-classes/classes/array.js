Array.prototype.isEqual = function(arr) {
    for(let i = 0; i < this.length; i++){
        if(this[i] != arr[i]) {
            return false;
        }
    }
    return true;
}
