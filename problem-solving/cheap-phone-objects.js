const phones = [
    {name: 'Samsung', camera: '12MP', storage: '32GB', price: 36000, color: 'silver'},
    {name: 'Walton', camera: '10MP', storage: '32GB', price: 22000, color: 'black'},
    {name: 'Apple', camera: '22MP', storage: '128GB', price: 82000, color: 'white'},
    {name: 'Xiaomi', camera: '18MP', storage: '64GB', price: 52000, color: 'black'},
    {name: 'Oppo', camera: '15MP', storage: '32GB', price: 20000, color: 'purple'},
    {name: 'Nokia', camera: '13MP', storage: '32GB', price: 44000, color: 'green'},
    {name: 'One Plus', camera: '32MP', storage: '128GB', price: 64000, color: 'ocean blue'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0 ; i < phones.length ; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);