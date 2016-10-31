var shellSort = ({
  var shSort = function shSort(arr=[]){
    let gap = arr.length/2; //步进参数
    let i,j, key;
    for (gap; gap >=1; gap = gap/2) {
      for(i = d;i <n; i++){
        key = a[i];
        for(j = i-d; j>=0 && a[j] >key; j-=d){
          a[j+d]=a[j];
        }
        a[j+d]=temp;
      }
    }

    return arr;
  }
})();
