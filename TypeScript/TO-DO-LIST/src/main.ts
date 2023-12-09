import './css/styles.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance  // not creating an instance just assinging it to something else
  const template = ListTemplate.instance

  // Add listener to new entry form submit
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText.length) return

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1

      // if the list is empty then keeping it's ID as 1 else keeping it's ID as the last index.

    const newItem = new ListItem(itemId.toString(), newEntryText)

    fullList.addItem(newItem)
    template.render(fullList)
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    template.clear()
  })

  // load initial data
  fullList.load()
  // initial render of template
  template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp)  // no need cuz defer is used 