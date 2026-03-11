import fs from "fs"

if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify([]))
    console.log("data.json has been created!")
}

const reading = JSON.parse(fs.readFileSync("data.json", "utf-8"))

const args = process.argv
const method = args[2]? args[2].toLowerCase():null

let description = args[4]? args[4].toLowerCase():null
let price = args[6]? args[6].toLowerCase():null

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

