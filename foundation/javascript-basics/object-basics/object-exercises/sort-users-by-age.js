// exercise solution 
// https://javascript.info/array-methods#sort-users-by-age
// Sort users by age..

// declared Objects
const ameer = {name: 'Ameer Hamza', age: 26};
const kashif = {name: 'Muhammed Kashif', age: 11};
const zahid = {name: 'Zahid Hussain', age: 15};
// storing objects in array[LIST].
const users = [ameer, zahid, kashif];

// declare a function to perform sorting operations which returns an parameter
function sortUsersByAge(theUsers) {
    return theUsers.sort((youngest, oldest)=> youngest.age - oldest.age);
}

console.log(sortUsersByAge(users));


// psuedocode
/*
START

     Step 1: Create user objects with name and age
    CREATE OBJECT ameer WITH {name: "Ameer Hamza", age: 26}
    CREATE OBJECT kashif WITH {name: "Muhammed Kashif", age: 11}
    CREATE OBJECT zahid WITH {name: "Zahid Hussain", age: 15}

     Step 2: Store objects in a list
    CREATE LIST users WITH [ameer, zahid, kashif]

     Step 3: Define the sorting function
    FUNCTION sortUsersByAge(theUsers)
        Sort the list by comparing the age property of each user (Youngest to Oldest)
        SORT theUsers IN ASCENDING ORDER BY user.age
        RETURN the sorted list
    END FUNCTION

    Step 4: Call function and display result
    CALL sortUsersByAge(users) and PRINT the result

END
*/

/* 
اس ایکسرسائز کو کرنے کے اور بھی طریقے ہیں جس سے شیلو کاپی (shallow copy) بنایا جا سکتا ہے۔ 
پرانے طریقے سے اوریجنل ارے (original array) میں تبدیلیاں ہو رہی تھیں۔ 
پر جب میں اس ایکسرسائز کو سالو کرنے کے لیے ریسرچ کر رہا تھا، تو مجھے اسپیریڈ آپریٹر (spread operator) 
اور ماڈرن جاوا اسکرپٹ میں آئی نئی میتھڈ toSorted() کا پتا چلا جو ارے کو میوٹیٹ (mutate) کرنے کے بجائے 
اس کی ایک شیلو کاپی بناتی ہے۔
*/

// اضافی سورس لنکس جہاں سے آپ ان ٹاپکس پہ پڑھ سکتے ہیں
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://www.w3schools.com/js/js_array_sort.asp
// https://www.geeksforgeeks.org/javascript/javascript-array-sort-method/
// https://dev.to/marinamosti/understanding-the-spread-operator-in-javascript-485j
