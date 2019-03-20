/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const man = {
    name: "Max",
    gender: "male",
    species: "human",
    hands: "2",
    legs: "2",
    say: () => `Hallo!`,
}

const woman = {
    name: "Lena",
    gender: "female",
    species: "human",
    hands: "2",
    legs: "2",
    say: () => `Bonjour!`,
}

const dog = {
    name: "Adolf",
    gender: "male",
    species: "dog",
    hands: "0",
    legs: "4",
    say: () => `Woof!`,
}

const cat = {
    name: "Klara",
    gender: "male",
    species: "cat",
    hands: "0",
    legs: "4",
    say: () => `Meeow!`,
}

print(`Hey there, my name is <strong>${dog.name}</strong> and I am a ${dog.species}! My gender is ${dog.gender}, in addition I have ${dog.legs} legs. Wait a minute...${dog.say()}!`);



// Hey there, my name is Paolo and I am a dog!My gender is male, in addition I have 4 legs.Wait a minute...Bark!
// Hey there, my name is Sophie and I am a cat!My gender is female, in addition I have 4 legs.Wait a minute...Mur - meow ?
// Hey there, my name is Pablito and I am a human!My gender is male, in addition I have 2 legs and 2 hands.Wait a minute...It seems that we got a strange rat here...Hey there, my name is Twitch and I am a rat!My gender is male, in addition I have 2 legs and 2 hands.Wait a minute...Oh, HELLO!
// Hey there, my name is Binokia and I am a human!My gender is female, in addition I have 2 legs and 2 hands.Wait a minute...Mur - meow ?
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
