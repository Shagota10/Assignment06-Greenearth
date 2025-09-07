## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---
#### 7) Create a README file to answer the following question-


#### 1)What is the difference between var, let, and const?

 1. var

Scope: Function-scoped
→ If declared inside a function, it’s accessible only inside that function.
→ If declared outside, it becomes global.

Hoisting: Variables declared with var are hoisted (moved to the top of the scope) and initialized with undefined.

Re-declaration: Can be re-declared and updated in the same scope.

⚠️ Problem: This can cause unexpected behavior in large codebases.

var x = 10;
var x = 20; // ✅ allowed
console.log(x); // 20

2. let

Scope: Block-scoped ({ ... })
→ Works only within the block, loop, or statement where it’s defined.

Hoisting: Hoisted but not initialized → You get a Temporal Dead Zone (TDZ) error if you access it before declaration.

Re-declaration: ❌ Cannot be re-declared in the same scope, but ✅ can be updated.

let y = 30;
y = 40; // ✅ update
// let y = 50; // ❌ Error: already declared

3. const

Scope: Block-scoped (same as let).

Hoisting: Same TDZ behavior as let.

Re-declaration: ❌ Cannot be re-declared.

Update: ❌ Cannot be reassigned.

⚠️ BUT: Objects and arrays declared with const can have their contents modified (only the reference is constant).

const z = 100;
// z = 200; // ❌ Error

const arr = [1, 2, 3];
arr.push(4); // ✅ allowed
console.log(arr); // [1, 2, 3, 4]

✅ Quick Comparison Table:
Feature	var	let	const
Scope	Function-scoped	Block-scoped	Block-scoped
Hoisting	Yes (undefined)	Yes (TDZ)	Yes (TDZ)
Re-declare in scope	✅ Allowed	❌ Not allowed	❌ Not allowed
Update value	✅ Allowed	✅ Allowed	❌ Not allowed
Mutate object/array	✅ Allowed	✅ Allowed	✅ Allowed

👉 In modern JavaScript,

Use const by default.

Use let when the value needs to change.

Avoid var (only needed for legacy code).
#### 2)1. forEach()

Purpose: Execute a function for each element in the array.

Return value: ❌ Always returns undefined → cannot chain results.

Use case: Just “do something” with each item (e.g., logging, updating external variables).

const nums = [1, 2, 3];

nums.forEach(num => {
  console.log(num * 2); 
});
// Output: 2, 4, 6

const result = nums.forEach(num => num * 2);
console.log(result); // ❌ undefined

2. map()

Purpose: Transform each element into a new array.

Return value: ✅ Returns a new array of the same length.

Use case: When you want to modify data and keep the results.

const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

3. filter()

Purpose: Keep only the elements that pass a condition.

Return value: ✅ Returns a new array (may be shorter).

Use case: When you want a subset of elements.

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

✅ Quick Comparison Table:
Method	Purpose	Returns	Can Chain?	Use Case Example
forEach()	Loop through elements	undefined	❌ No	Logging, side effects
map()	Transform elements	New array (same length)	✅ Yes	Multiply numbers, format data
filter()	Select elements by condition	New array (subset)	✅ Yes	Get only even numbers, filter users

👉 Rule of thumb:

Use forEach when you don’t care about returning anything (side effects only).

Use map when you want to transform data.

Use filter when you want to remove unwanted items.

#### 3) What are arrow functions in ES6?
Arrow functions were introduced in ES6 (ECMAScript 2015), and they give JavaScript a shorter, cleaner way to write functions.

🔑 Key Features of Arrow Functions

Shorter Syntax
No need for the function keyword.

// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5


Implicit Return
If the function body has only one expression, you can omit return and {}.

const square = x => x * x;
console.log(square(4)); // 16


No this binding
Arrow functions don’t create their own this. Instead, they inherit this from the surrounding scope (lexical scoping).
This makes them very useful inside callbacks.

function Person(name) {
  this.name = name;
  setTimeout(() => {
    console.log(this.name); // ✅ works, 'this' refers to Person
  }, 1000);
}

new Person("Alice"); // After 1s → Alice


If we had used a normal function inside setTimeout, this would be undefined (or window in browsers).

Cannot be used as constructors
Unlike normal functions, arrow functions cannot be used with new.

const User = (name) => {
  this.name = name;
};
// new User("Bob"); // ❌ Error: User is not a constructor


No arguments object
Arrow functions don’t have their own arguments object. You’d use rest parameters instead (...args).

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10

✅ When to Use Arrow Functions

When you need short, inline functions (callbacks, array methods).

When you want to preserve the value of this.

When you don’t need arguments or new.

⚠️ Avoid arrow functions for:

Object methods (if you need this to refer to the object).

Class constructors.





#### 4) How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a convenient way to unpack values from arrays or properties from objects into variables.

🔹 1. Array Destructuring

You can pull out array elements into variables in a single line.

const numbers = [10, 20, 30];

// Traditional way
const a = numbers[0];
const b = numbers[1];

// ES6 Destructuring
const [x, y, z] = numbers;
console.log(x, y, z); // 10 20 30


👉 You can skip values:

const [first, , third] = numbers;
console.log(first, third); // 10 30


👉 With default values:

const [p, q, r = 50] = [1, 2];
console.log(p, q, r); // 1 2 50

🔹 2. Object Destructuring

Extract values from objects by matching property names.

const person = { name: "Alice", age: 25 };

// Traditional way
const name1 = person.name;
const age1 = person.age;

// ES6 Destructuring
const { name, age } = person;
console.log(name, age); // Alice 25


👉 Rename variables:

const { name: fullName, age: years } = person;
console.log(fullName, years); // Alice 25


👉 With default values:

const { city = "Unknown" } = person;
console.log(city); // Unknown

🔹 3. Nested Destructuring

Works with nested arrays/objects.

const user = {
  id: 1,
  profile: { username: "bob123", email: "bob@mail.com" }
};

const { profile: { username, email } } = user;
console.log(username, email); // bob123 bob@mail.com

🔹 4. Destructuring in Function Parameters

Very useful for cleaner code when functions take objects.

function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Alice", age: 25 }); // Hello Alice, age 25

🔹 5. Rest with Destructuring

You can collect the "rest" of the elements/properties.

const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }


✅ Summary:

Array destructuring → based on position.

Object destructuring → based on property name.

Supports defaults, renaming, nesting, and rest parameters.


#### 5) Template literals in ES6 are a new way to create strings that are more powerful and readable than traditional string concatenation.

🔹 1. Syntax

Template literals use backticks (`), not quotes (' or ").

const name = "Alice";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Alice!

🔹 2. Differences from String Concatenation
✅ a) String Interpolation

Old way (concatenation):

const name = "Alice";
const age = 25;
const msg = "My name is " + name + " and I am " + age + " years old.";


New way (template literals):

const msg = `My name is ${name} and I am ${age} years old.`;
console.log(msg);


👉 Much cleaner and avoids + everywhere.

✅ b) Multi-line Strings

Old way:

const text = "Line 1\n" +
             "Line 2\n" +
             "Line 3";


New way:

const text = `Line 1


Line 2
Line 3`;
console.log(text);


👉 Preserves formatting and newlines automatically.

---

### ✅ c) **Expressions inside Strings**
You can run **JavaScript expressions** directly inside `${ ... }`.

```js
const a = 5, b = 10;
console.log(`The sum is ${a + b}`); // The sum is 15

✅ d) Tagged Templates (Advanced)

You can create custom string-processing functions.

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    result + str + (values[i] ? `**${values[i]}**` : ""), "");
}

const user = "Alice";
const age = 25;
console.log(highlight`Name: ${user}, Age: ${age}`);
// Output: Name: **Alice**, Age: **25**

🔹 Quick Comparison Table
Feature	Concatenation (+)	Template Literals (`)
String interpolation	❌ No	✅ Yes (${})
Multi-line strings	❌ Needs \n + join	✅ Natural support
Expression evaluation	❌ Manual	✅ Built-in
Tagged templates	❌ Not possible	✅ Supported

👉 In short:
Use template literals whenever you build dynamic strings — they’re cleaner, easier to read, and more powerful than concatenation.
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---