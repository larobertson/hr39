module.exports = function (q) {
    //Given a queue of numbers (they should start out in order: index + 1 = value)
  //iterate over the queue, check the value against the index
      //if it is more than i + 3
          //print too chaotic
      //if it is more than i + 1 but less than i + 4
          //if it is i + 2, add count + 1
          //if it is i + 3, add count + 2
    let bribeCount = 0;
    let min = q.length;

    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] > i + 3) {
            return 'Too chaotic';
        }
        if (q[i] > i + 1) {
            bribeCount += q[i] - (i + 1);
        } else {
            if (min > q[i]) {
                min = q[i];
            } else if (q[i] !== min) {
                bribeCount += 1;
            }
        }
    }
    return bribeCount;   
}
