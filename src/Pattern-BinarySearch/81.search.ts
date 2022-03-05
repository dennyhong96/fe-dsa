export function search(nums: number[], target: number): boolean {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) return true;
    if (nums[m] === nums[l] && nums[m] === nums[r]) {
      // this condition means we have duplicate nums wrapping across two halves
      // shrink l and r to account for duplicate numbers, so we don't miss any potential result
      // handles cases like this - [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1] -> [1,1,1,1,1,1,1,1,2]
      l++;
      r--;
    } else if (nums[m] <= nums[r]) {
      // nums[m] <= nums[r] instead of nums[m] < nums[r]
      // because nums might contain duplicates

      // m is in right sorted portion
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      // m is in left sorted portion
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return false;
}
// [3, 4, 5, 6, 1, 2]
//  l     m        r

// [5, 6, 1, 2, 3, 4]
//  l     m        r

// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//  l                          m                          r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//     l                       m                       r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//        l                    m                    r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//           l                 m                 r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//              l              m              r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//                 l           m           r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//                                l  m     r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//                                      lm r
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2
//                                         lr
