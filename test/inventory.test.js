import { setBrowserVariable, getBrowserVariable } from '../src/functions';
import { Character, Enemy } from '../src/character';
import { Combat } from '../src/battle';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import {Inventory, Item} from '../src/inventory';

describe('Inventory', function () {
  it('inventory constructor', function(){
    let knight = new Character();
    knight.inventory = new Inventory([
      {name: "Sword", weight: 12}, 
      {name: "Shield", weight: 20}]);      
    expect(knight.inventory.items[0].name).toEqual("Sword");
    expect(knight.inventory.items[0].damageType).toEqual("Physical");
  });

  it('inventory constructor', function(){
    let knight = new Character();
    knight.inventory.addItems([
      {name: "Sword", weight: 12}, 
      {name: "Shield", weight: 20}]);      
    expect(knight.inventory.items[0].name).toEqual("Sword");
    expect(knight.inventory.items[0].damageType).toEqual("Physical");
  });

  it('inventory add item', function(){
    let knight = new Character();   
    knight.inventory.addItem({name: "Sword", weight:12, value:0, damage:1, damageType: "Physical"})
    expect(knight.inventory.items[0].name).toEqual("Sword");
    expect(knight.inventory.items[0].damageType).toEqual("Physical");
  });

  it('enemy add Item', function(){
    let enemy = new Enemy();
    enemy.inventory.addItem({name: "Sword", weight:12, value:0, damage:1, damageType: "Physical"})
    expect(enemy.inventory.items[0].name).toEqual("Sword");
    expect(enemy.inventory.items[0].damageType).toEqual("Physical");
  })
  it('Enemy add random Item', function(){
    let enemy = new Enemy();
    enemy.inventory.addRandomItem();
    expect(enemy.inventory.items.length).toEqual(1);
  })

});

describe('Item', function() {
    it('creates a new item', function() {
        let ironArmor = new Item({
            name: "Iron Armor", weight: 40, value: 100
        });
        expect(ironArmor.name).toEqual("Iron Armor");
    });
});