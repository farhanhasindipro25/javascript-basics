const me = {
    // value: string
    name: 'Farhan Hasin Dipro',
    // value: integer
    age: 23,
    // value: string
    address: 'Dhaka, Bangladesh',
    // value: boolean
    isSingle: false,
    // value: Array of strings
    extraCurricularActivities: ['Drawing','Video Editing','Painting', 'Illustrating','Playing Drums','Playing Guitar','Listening to music'],
    // value: object with an object as a property/key
    guitar:{
        brand: 'Ibanez',
        model: 'gio',
        price: '15000',
        made: 2013,
        hasFloydRose: false,
        manufacturer: {
            name: 'Ibanez',
            ceo: 'Hoshino Gakki',
            country: 'Japan'
        }
    },
    // value: Array of objects
    franchises: [
        {
            name: 'Marvel',
            favouriteCharacters: ['Daredevil','Moon Knight', 'Black Panther', 'Doctor Strange'],
        },
        {
            name: 'DC',
            favouriteCharacters: ['Batman','Deadshot', 'Nightwing', 'Constantine'],
        }
    ],
    // value: function
    hobbies: function(){
        console.log('Watching movies at Star Cineplex')
    }
}

// Accessing full object
console.log()
console.log(".....Accessing full object.....")
console.log()
console.log(me);
// Accessing regular property values
console.log()
console.log(".....Accessing regular property values.....")
console.log()
console.log(me.name);
console.log(me.age);
console.log(me.address);
console.log(me.isSingle);
// Accessing full array as a property value
console.log()
console.log(".....Accessing full array as a property value.....")
console.log()
console.log(me.extraCurricularActivities);
// Accessing array elements as a property value
console.log()
console.log(".....Accessing array elements as a property value.....")
console.log()
console.log(me.extraCurricularActivities[0]);
console.log(me.extraCurricularActivities[1]);
console.log(me.extraCurricularActivities[2]);
console.log(me.extraCurricularActivities[3]);
// Accessing full object as value
console.log()
console.log(".....Accessing full object as value.....")
console.log()
console.log(me.guitar);
// Accessing object values as object value
console.log()
console.log(".....Accessing object values as object value.....")
console.log()
console.log(me.guitar.brand);
console.log(me.guitar.hasFloydRose);
console.log(me.guitar.made);
console.log(me.guitar.manufacturer);
console.log(me.guitar.price);
console.log(me.guitar.manufacturer.ceo);
console.log(me.guitar.manufacturer.country);
console.log(me.guitar.manufacturer.name);

// Accessing array of objects as values
console.log()
console.log(".....Accessing array of objects as values.....")
console.log()
console.log(me.franchises);
console.log(me.franchises[0]);
console.log(me.franchises[0].favouriteCharacters);
console.log(me.franchises[0].favouriteCharacters[0]);
console.log(me.franchises[0].favouriteCharacters[1]);
console.log(me.franchises[0].favouriteCharacters[2]);
console.log(me.franchises[0].favouriteCharacters[3]);
console.log(me.franchises[0].name);
console.log(me.franchises[1]);

// Accessing function as values
console.log();
console.log(".....Accessing function as values.....");
console.log();
console.log(me.hobbies); // type: function name
me.hobbies(); // Invokes function and shows output


const products = {
    '0':15,
    '1':56,
    '2':87
}
console.log(products);
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);

