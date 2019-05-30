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

