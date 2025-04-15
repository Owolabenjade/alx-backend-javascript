export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // Using let instead of var to create block-scoped variables that
      // don't affect the outer variables with the same names
      let task = true;
      let task2 = false;
    }
  
    return [task, task2];
  }