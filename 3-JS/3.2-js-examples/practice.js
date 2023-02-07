// def calculateArea(leng, wid):
//     return leng * wid

function calculateArea() {
    const fieldLength = document.querySelector("#length").value
    const fieldWidth = document.querySelector("#width").value
    const area = fieldLength * fieldWidth
    document.querySelector("#area").value = area
}

function calculateRefund() {
    const smallBottles = document.querySelector("#small-bottles").value
    const largeBottles = document.querySelector("#large-bottles").value
    const refund = smallBottles * 0.1 + largeBottles * 0.25
    document.querySelector("#refund").value = refund
}

