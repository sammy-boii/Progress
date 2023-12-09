interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) {}

   // initializing them in the parameters is the same as assigning them default values.
   
   // keep in mind these private properties are encapsulated within the instance of the class and not the class itself. So they can only be used within the instances of this class. 


    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}

// The parameter of the setter function adheres to the interface's contract.

// The getter and setter functions are called via the public props (id, item, check) and return the private prop (_id, _item, _check)

// These getter and setter functions are able to access the private variable because they get belong to the instance of the class as well.
