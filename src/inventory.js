export class Inventory{
    constructor(items) {
        this.items = [];
        if (items) {
            items.forEach(element => {
                this.items.push(new Item(element));
            });
        }
    }

    addItem(item){       
        this.items.push(new Item(item));
    }

    addItems(items){
        items.forEach(element => {
            this.items.push(new Item(element));
        });  
    }

    addRandomItem(){
        let itemTable = [
            {
                name: "Sword",
                weight: "12",
                value:  34,
                damage: 50,
                damageType: "Physical"
            },
            {
                name: "Shield",
                weight: 20,
                value:  34,
                damage: 0,
                damageType: ""
            },
            {
                name: "Stick",
                weight: 2,
                value:  1,
                damage: 150,
                damageType: "Magical"
            },
            {
                name: "Sword",
                weight: 5,
                value:  0,
                damage: 2,
                damageType: "Physical"
            }
        ]
        let chosen = Math.floor(Math.random() * itemTable.length);
        this.items.push(itemTable[chosen]);       
    }
}

export class Item {
    constructor(stats){
        this.name = "Garbage";
        this.weight = 1;
        this.value = 0;
        this.damage = 1;
        this.damageType = "Physical"
        Object.assign(this, stats)
    }
    
}

