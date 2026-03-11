import fs from "fs"

if (!fs.existsSync("data.json")) {
    fs.writeFileSync("data.json", JSON.stringify([]))
    console.log("data.json has been created!")
}