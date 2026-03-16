import fs from "fs"

if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify([]))
    console.log("data.json has been created!")
}

const reading = JSON.parse(fs.readFileSync("data.json", "utf-8"))

const args = process.argv
const method = args[2]? args[2].toLowerCase():null

const id_index = args.indexOf("--id")
const remove = args[id_index + 1]

const description_index = args.indexOf("--description")
const description = args[description_index + 1]

const amount_index = args.indexOf("--amount")
const price = args[amount_index + 1]

const month_index = args.indexOf("--month") 
const month = args[month_index + 1]




// User can add their description with the price

if (method === "add" && description && price) {

    const date = new Date().toISOString().split("T")[0]

    const ids = reading.map(task => task.ID)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    const newId = maxId + 1

    const user = {
        ID: newId,
        item: description,
        amount: price,
        createdAt: date,
        updatedAt: date
        
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

else if (method === "update" && remove) {

    const edit = reading.find(f => f.ID === Number(remove))

    if (edit) {
        if (description) {
            edit.item=description
            edit.updatedAt = new Date().toLocaleString()
        }
        if (price) {
            edit.amount=price
            edit.updatedAt = new Date().toLocaleString()
        }
    }

    fs.writeFileSync("data.json", JSON.stringify(reading, "", 2))
    console.log(`ID: ${remove} has been updated!`)
}

else if (method === "delete" && remove) {
    const removing = reading.filter(f => f.ID != Number(remove))

    fs.writeFileSync("data.json", JSON.stringify(removing, "", 2))
    console.log(`Expense deleted successfully`)
}

else if (method === "list") {

    console.log("# ID  Date       Description  Amount")
    
    reading.forEach(f => (
        console.log("#", f.ID, f.createdAt.padEnd(12), f.item.padEnd(13), `$${f.amount}`)
    ))


}

else if (method === "summary" && month) {
    
}
