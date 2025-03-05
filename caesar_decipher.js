function decipher(encryptedText, knownWord) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Standard English alphabet
    
    // Looping through possible shift values from 1 to 25
    for (let shift = 1; shift < 26; shift++) {
        let decryptedText = encryptedText
            .split("") // Convert string to an array of characters
            .map((char) => {
                let isUpperCase = char === char.toUpperCase(); // Checking if character is uppercase
                let lowerChar = char.toLowerCase(); // Converting character to lowercase for processing
                let index = alphabet.indexOf(lowerChar); // Getting the index of the character in the alphabet
                
                if (index !== -1) { // If the character is a letter
                    let newIndex = (index - shift + 26) % 26; // Reverse shift while keeping index within range
                    let newChar = alphabet[newIndex]; // Getting the decrypted character
                    return isUpperCase ? newChar.toUpperCase() : newChar; // Restore original case
                }
                return char; // Keeping non-alphabetic characters unchanged
            })
            .join(""); // Joining characters back into a string

        if (decryptedText.includes(knownWord)) { // Checking if decrypted text contains the known word
            return decryptedText; // Returning the correctly decrypted text
        }
    }
    return "Decryption failed: No valid shift found."; // If no valid shift is found, return an error message
}

// Example of Test cases
let testCases = [
    { encryptedText: "Uifsf jt b tfdsfu dpnf", knownWord: "secret" }, 
    { encryptedText: "Khoor Zruog", knownWord: "Hello" } 
];

testCases.forEach(({ encryptedText, knownWord }) => {
    console.log(`Encrypted: ${encryptedText}`);
    console.log(`Decrypted: ${decipher(encryptedText, knownWord)}`);
    console.log("------"); // Separator for readability
});
