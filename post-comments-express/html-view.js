const results = (model) => {
    let html = `
        <div>
    `
    model.map( (item) => {
        html += `
            <span>${item.email}</span><br>
            <span>${item.comment}</span>
            <br>
        `
    })
    html += `
        </div>
    `
    return html
}
const html = (model) => {
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form</title>
    </head>
    <body>
        <h1>Form</h1>
        <div>
            <form action="" method="POST">
                <fieldset>
                    <legend>Personal Information</legend>
                    <div>
                        Email <input type="email" name="email">
                    </div>
                    <div>
                        <label for="comment">Comment:</label><br/>
                        <textarea id='comment' name="comment" rows="4" cols="50"></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
        
    ${results(model)}
    </body>
    </html>
`
}
module.exports = html;