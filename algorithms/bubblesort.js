
export function bubbleSort(){
  var bSort = function(arr=[]) {
    let len = arr.length-1;
    while (len > 0) {
      let pos = 0; //已经排序好的最后一个位置
      for (var i = 0; i < len; i++) {
        if (arr[i] > arr[i+1]) {
          pos = i;
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
      }
      i = pos;
    }
    return arr;
  };

  var bSort_double = function(arr=[]) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    return arr3;
  };

  return {
    bSort: bSourt,
    bSort_double: bSort_double
  }
}
