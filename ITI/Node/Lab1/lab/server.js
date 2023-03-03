const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    let url = req.url;
    if (url !== "/favicon.ico") {
        const data = url.substring(1).split("/")
        const operation = data[0]
        data.shift()

        let result = 0;
        if (operation === "add") {
            data.forEach((val) => {
                result += parseInt(val)
            })
        }
        else if (operation === "min") {
            data.forEach((val, index) => {
                if (index == 0) {
                    result = val
                } else {
                    result -= val
                }
            })
        }
        else if (operation === "mul") {
            data.forEach((val, index) => {
                if (index == 0) {
                    result = val
                } else {
                    result *= val
                }
            })
        }
        else if (operation === "div") {
            data.forEach((val, index) => {
                if (index == 0) {
                    result = val
                } else {
                    result /= val
                }
            })
        }
        res.write(`<h1>The result is: ${result.toString()}</h1>`)
        fs.writeFileSync("result.txt" , ` The result is: ${result.toString()}`)
        console.log(`result`, result);
    }
    res.end()
}).listen(7000)