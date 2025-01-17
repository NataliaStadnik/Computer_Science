// interface Shape {
//     drawCircle();
//     drawSquare();
// }

// class Circle implements Shape {
//     drawCircle() {}
//     drawSquare() {}
//     drawRectangle() {}    
// }

// class Square implements Shape {
//     drawCircle() {}
//     drawSquare() {}   
// }

// В результате классы, реализующие этот интерфейс и представляющие отдельные геометрические фигуры, 
// такие, как круг (Circle), квадрат (Square)  должны содержать реализацию всех этих методов.

interface Shape {
    draw();
}

interface ICircle {
    drawCircle();
}

interface ISquare {
    drawSquare();
}

class Circle implements ICircle {
    drawCircle() {}
}

class Square implements ISquare {
    drawSquare() {}
}

class CustomShape implements Shape {
   draw() {}
}