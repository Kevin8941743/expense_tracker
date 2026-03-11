import fs from "fs"

if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify([]))
    console.log("data.json has been created!")
}

const reading = JSON.parse(fs.readFileSync("data.json", "utf-8"))

const args = process.argv
const method = args[2]? args[2].toLowerCase():null

const id_after_delete = args.indexOf("--id")
const remove = args[id_after_delete + 1]

const item_after_description = args.indexOf("--description")
const description = args[item_after_description + 1]

const price_after_description = args.indexOf("--amount")
const price = args[price_after_description + 1]


if (method === "add" && description && price) {

    const day = new Date().toLocaleString()

    const ids = reading.map(task => task.ID)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    const newId = maxId + 1

    const user = {
        ID: newId,
        item: description,
        amount: price,
        createdAt: day,
        updatedAt: day
    }

    reading.push(user)
    fs.writeFileSync("data.json", JSON.stringify(reading, "", 2))

    console.log(`Expense added successfully (ID: ${newId})`)

} 

else if (method === "summary") {
    const zero = 0
    const total = reading.reduce((accumulator, currentValue) => accumulator + Number(currentValue.amount), zero)
    console.log(`Total expenses: $${total}`)

}

else if (method === "delete" && remove) {
    const removing = reading.filter(f => f.ID != remove)

    fs.writeFileSync("data.json", JSON.stringify(removing, "", 2))
    console.log(`Expense deleted successfully`)
}

