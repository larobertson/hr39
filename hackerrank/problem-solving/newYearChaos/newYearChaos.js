function minimumBribes(q) {
  //Given a queue of numbers (they should start out in order: index + 1 = value)
  //iterate over the queue, check the value against the index
      //if it is more than i + 3
          //print too chaotic
      //if it is more than i + 1 but less than i + 4
          //if it is i + 2, add count + 1
          //if it is i + 3, add count + 2
  let bribeCount = 0;
  let max = 0;

  for (let i = 0; i < q.length; i++) {
      if (q[i] > i + 3) {
          console.log('Too chaotic');
          return
      } else if (q[i] > i + 1) {
          bribeCount += q[i] - (i + 1);
      } else {
          if (max < q[i]) {
              max = q[i];
          } else if (q[i] !== max) {
              bribeCount += 1;
          }
      }
  }
  console.log(bribeCount);   
}