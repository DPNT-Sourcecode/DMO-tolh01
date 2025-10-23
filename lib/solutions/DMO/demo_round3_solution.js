'use strict';

class DemoRound3Solution {
    constructor() {
        // Initialize inventory as a Map to store items by SKU
        // Each entry will store: sku -> {item: inventoryItem, quantity: number}
        this.inventory = new Map();
    }

    inventory_add(inventoryItem, number) {
        // Get the SKU from the inventory item
        const sku = inventoryItem.sku;

        // Check if item already exists in inventory
        if (this.inventory.has(sku)) {
            // Update existing item quantity
            const existingEntry = this.inventory.get(sku);
            existingEntry.quantity += number;
            return existingEntry.quantity;
        } else {
            // Add new item to inventory
            const newEntry = {
                item: inventoryItem,
                quantity: number
            };
            this.inventory.set(sku, newEntry);
            return number;
        }
    }

    inventory_size() {
        // Return the number of unique items (distinct SKUs) in the inventory
        return this.inventory.size;
    }

    inventory_get(itemSku) {
        // Check if the item exists in inventory
        if (this.inventory.has(itemSku)) {
            // Return the inventory item object
            return this.inventory.get(itemSku).item;
        } else {
            // Return null if item not found
            return null;
        }
    }
}

module.exports = DemoRound3Solution;
