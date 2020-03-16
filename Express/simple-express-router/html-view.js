const html = (model) => {
    return `
    <html>
    ${model.val}
    </html>
    `
}

const html2 = (model) => {
    return `
    <html>
    <h1>
    ${model.val}
    </h1>
    <p>
    ${model.amount}
    </html>
    `
}

const export2 = {
    'object':null
}

module.exports = {
    html,
    html2,
    export2
}