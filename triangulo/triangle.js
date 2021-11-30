function trianglePerimeter(sideA, sideB, base) {

    return sideA + sideB + base;

}



function triangleArea(base, height) {

    return (base * height) / 2;

}

function calculatePerimeterTriangle() {
    const input = document.getElementById("TriangleInputPerimeter");

    const inputValue = input.value.split(",")
    const sideA = parseInt(inputValue[0])
    const sideB = parseInt(inputValue[1])
    const base = parseInt(inputValue[2])
    const perimeter = sideA + sideB + base

    document.getElementById("triangleValue").innerHTML = perimeter;


}


function calculateAreaTriangle() {
    let input = document.getElementById("TriangleInputArea");
    const inputValue = input.value.split(",")
    const base = parseInt(inputValue[0])
    const height = parseInt(inputValue[1])
    const area = triangleArea(base, height)

    document.getElementById("triangleValue").innerHTML = area;
}