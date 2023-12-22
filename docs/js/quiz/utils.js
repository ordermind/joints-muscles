/**
 * Shuffles an array.
 *
 * @param {array} array
 * @returns a new, shuffled array (shallow copy).
 */
export function shuffle(array) {
    const arrayCopy = [...array];

    // Loop through array starting at the last index
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indexes i and j
        const temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }
    return arrayCopy;
}

/**
 * Checks if two objects are equal (same keys and values, disregarding key order).
 *
 * @param {object} obj1
 * @param {object} obj2
 *
 * @returns boolean
 */
export function deepEqual(obj1, obj2) {
    // Base case: If both objects are identical, return true.
    if (obj1 === obj2) {
        return true;
    }
    // Check if both objects are objects and not null.
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    // Get the keys of both objects.
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Check if the number of keys is the same.
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Iterate through the keys and compare their values recursively.
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
        }
    }
    // If all checks pass, the objects are deep equal.
    return true;
}