const products = [
    {id: 1, name: 'Xiaomi Redmi Note 10 Pro', category:'phone', price: 23500},
    {id: 2, name: 'Iphone 13 Pro max', category:'Phone', price: 93000},
    {id: 3, name: 'Macbook Air', category:'laptop', price: 119000},
    {id: 4, name: 'Asus Vivobook S15', category:'Laptop', price: 63500},
    {id: 5, name: 'Huion Inspiroy Ink', category:'tablet', price: 6500},
    {id: 6, name: 'Asus Surfacebook Pro', category:'Laptop', price: 110000},
    {id: 7, name: 'One Plus 10 Pro', category:'Phone', price: 95000},
    {id: 8, name: 'One Plus 8 Pro', category:'phone', price: 95000},
    {id: 9, name: 'NVIDIA RTX 3090 Super', category:'Graphics Card', price: 134000},
    {id: 10, name: 'Keychron K3 V2', category:'keyboard', price: 8500},
];

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.category.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result1 = matchedProducts(products, 'phone');
console.log(result1);

const result2 = matchedProducts(products, 'laptop');
console.log(result2);