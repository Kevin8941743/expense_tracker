import fs from "fs"

if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify([]))
    console.log("data.json has been created!")
}

const reading = JSON.parse(fs.writeFileSync("data.json", "utf-8"))

const args = process.argv
const method = args[2]


