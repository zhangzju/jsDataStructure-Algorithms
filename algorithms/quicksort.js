export function qSort(arr=[]){
        if (arr.length <= 1) {
          return arr;
        }
        let left = [];
        let right = [];
        let key = arr[0];

        for (var i = 1; i < arr.length; i++) {
          if (arr[i]>key) {
            right.push(arr[i]);
          }else {
            left.push(arr[i]);
          }
        }

        return [].concat(qSort(left), key, qSort(right))
      }

