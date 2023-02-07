// def calculateArea(leng, wid):
//     return leng * wid

function calculateArea() {
    const fieldLength = document.querySelector("#length").value
    const fieldWidth = document.querySelector("#width").value
    const area = fieldLength * fieldWidth
    document.querySelector("#area").value = area
}