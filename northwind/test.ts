class Animal {
    name: string;
    weight: number;
}

class Dog extends Animal {
    public bark() {}
}

class Cat extends Animal {
    public miau() {}
}

class Product {
    price: number
}

function getAnimal(): Animal {
    return new Cat()
}

const animal = getAnimal() as unknown as Product 
const price = animal.price