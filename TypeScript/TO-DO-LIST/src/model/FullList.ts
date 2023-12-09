import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

    // the list property is an array of objects that must follow the same interface that ListItem follows.

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

         // the list is compared with 'string' even though it's JSON cuz it's in "string format" (JSON.stringify(...))

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))

        // saves '_list' in the localStorage of the browser under the name 'myList' as a JSON file. It can store other data types as well.
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}

// Static keyword is used to make the 'instance' property belong to the class itself rather than it's instances so we can use it within the class. Then we create a new instance of the class iteself using that property. Since the instance is created within the class, the private constructor can be accessed. This is done for singleton design meaning to insure that only one instance of this class is created. 'FullList.instance' would return the instance of FullList class containing the methods and other properties.