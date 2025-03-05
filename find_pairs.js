function findPairs(nums1, nums2, k) {
    let pairs = [];
    let set = new Set(nums1); // Storing elements of nums1 in a Set for quick lookup

    for (let num of nums2) { // Iterating through nums2
        let complement = k - num; // Find the required complement from nums1
        if (set.has(complement)) { // Checking if the complement exists in nums1
            pairs.push([complement, num]); // Adding the pair to the result list
        }
    }

    return pairs; // Returning the list of valid pairs
}

// Example using data
let nums1 = [4, 5, 6, 7, 0, 1]; 
let nums2 = [3, 6, 9, 10, 11, 12, 13, 19]; 
let k = 13; // Target sum

console.log(findPairs(nums1, nums2, k)); // Output matching pairs
