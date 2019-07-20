//function roundToThousandth (num) {
//	const FOR_ROUNDING = 1000;
//	return Math.round(num*FOR_ROUNDING)/FOR_ROUNDING;
//}
//function areaOfParalelogram(sideA,sideB,angleInDegrees) {
//	let isFilled = typeof sideA==='undefined'||typeof sideB==='undefined'||typeof angleInDegrees==='undefined';
//	let isSideANotValid = sideA<0; 
//	let isSideBNotValid = sideB<0; 	
//	const MAX_AMOUNT_OF_ANGLES_IN_PARALELOGRAM = 179;
//	let validDataForAngles = angleInDegrees<0 || angleInDegrees>MAX_AMOUNT_OF_ANGLES_IN_PARALELOGRAM;
//	if (isFilled||isSideANotValid||isSideBNotValid||validDataForAngles) {
//		return '-';
//	} else {
//		const AMOUNT_OF_DEGREES_IN_RADIAN = 180;
//		let angleInRadians = angleInDegrees/AMOUNT_OF_DEGREES_IN_RADIAN*Math.PI;
//		return roundToThousandth(sideA*sideB*Math.sin(angleInRadians));
//	}
//}
//function heightOfParalelogram (sideA,sideB,angleInDegrees) {
//	return roundToThousandth(areaOfParalelogram(sideA,sideB,angleInDegrees)/sideA);
//}
////  I suppose sides are more than 0, and angle will be between 0 and 180 degrees
//function areaOfDisk(radius) {
//	if (radius<0||typeof radius==='undefined') {
//		return '-';
//	} else {
//		const POWER = 2;
//		return roundToThousandth(Math.PI*Math.pow(radius,POWER));
//	}
//}
//function lengthOfDisk(radius) {
//	if (radius<0||typeof radius==='undefined') {
//		return '-';
//	} else {
//		const COEFFICIENT = 2;
//		return roundToThousandth(Math.PI*radius*COEFFICIENT);
//	}	
//}
//// radius is more than 0
//function placeOfEllipse (horizontalRadius,verticalRadius) {
//	let dataValidations = horizontalRadius<0||verticalRadius<0;
//	if (dataValidations||typeof horizontalRadius==='undefined'||typeof verticalRadius==='undefined') {
//		return '-';
//	} else {
//		return roundToThousandth(Math.PI*horizontalRadius*verticalRadius);
//	}	
//}
//function lengthOfEllipse(horizontalRadius,verticalRadius) {
//	let dataValidations = horizontalRadius<0||verticalRadius<0;
//	if (dataValidations||typeof horizontalRadius==='undefined'||typeof verticalRadius==='undefined') {
//		return '-';
//	} else {
//		const COEFFICIENT = 2;
//		const POWER =2;
//		let processOfCalc =Math.sqrt((Math.pow(horizontalRadius,POWER)+Math.pow(verticalRadius,POWER))/COEFFICIENT);
//		return roundToThousandth(Math.PI*COEFFICIENT*processOfCalc);
//	}	
//}
//// horizontal and vertacal radius are more than 0
//function areaOfSquare(side) {
//	if (side<0||typeof side==='undefined') {
//		return '-'
//	} else {
//		const POWER = 2;
//		return roundToThousandth(Math.pow(side,POWER))
//	}
//}
//function diagonalOfSquare(side) {
//	return	diagonalOfrectangle(side,side);	
//}
//function areaOfRectangle(side1,side2) {
//	const ANGLE_OF_PARALELOGRAM_FOR_RECTANGLE = 90;
//	return areaOfParalelogram(side1,side2,ANGLE_OF_PARALELOGRAM_FOR_RECTANGLE);
//}
//function diagonalOfrectangle(sideA,sideB) {
//	let isFilled = typeof sideA==='undefined'||typeof sideB==='undefined';
//	let isSideANotValid = sideA<0; 
//	let isSideBNotValid = sideB<0; 	
//	if (isFilled||isSideANotValid||isSideBNotValid) {	
//		return '-';
//	} else {
//		const POWER = 2;
//		let processOfCalc = Math.pow(sideA,POWER)+Math.pow(sideB,POWER);
//		return roundToThousandth(Math.sqrt(processOfCalc));
//	}
//}
//function areaOfRightTriangle (cathetus1,cathetus2) {
//	const RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE=2;
//	return roundToThousandth(areaOfRectangle(cathetus1,cathetus2)/RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE) 		
//}
//function hypotenuseOfRightRectangle(cathetus1,cathetus2) {
//	return diagonalOfrectangle(cathetus1,cathetus2)
//}
//function heightOfRightRectangle(cathetus1,cathetus2) {
//	let isFilled = typeof cathetus1==='undefined'||typeof cathetus2==='undefined';
//	let isSideANotValid = cathetus1<0; 
//	let isSideBNotValid = cathetus2<0;
//	if (isFilled ||isSideANotValid||isSideBNotValid) {
//		return '-'
//	} else {
//		const COEFFICIENT =2;
//		let areaOfTriangle = areaOfRightTriangle(cathetus1,cathetus2);
//		let hypotenuse = hypotenuseOfRightRectangle(cathetus1,cathetus2);
//		return roundToThousandth(COEFFICIENT*areaOfTriangle/hypotenuse);
//	}
//}
//function angleAOfTriangle(cathetus1,cathetus1) {
//	
//}


//.................version 2


//	function roundToThousandth(num) {
//    const FOR_ROUNDING = 1000;
//    return Math.round(num * FOR_ROUNDING) / FOR_ROUNDING;
//}
//function areaOfParallelogram(
//    sideA,
//    sideB,
//    angleInDegrees
//) {
//    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined' || typeof angleInDegrees === 'undefined';
//    let isSideANotValid = sideA <= 0;
//    let isSideBNotValid = sideB <= 0;
//    const MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM = 179;
//    let validDataForAngles = angleInDegrees < 0 || angleInDegrees > MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM;
//    if (isFilled || isSideANotValid || isSideBNotValid || validDataForAngles) {
//        return '-';
//    } else {
//        const AMOUNT_OF_DEGREES_IN_RADIAN = 180;
//        let angleInRadians = angleInDegrees / AMOUNT_OF_DEGREES_IN_RADIAN * Math.PI;
//        return roundToThousandth(sideA * sideB * Math.sin(angleInRadians));
//    }
//}
//function heightOfParallelogram(
//    sideA,
//    sideB,
//    angleInDegrees
//) {
//    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined' || typeof angleInDegrees === 'undefined';
//    let isSideANotValid = sideA <= 0;
//    let isSideBNotValid = sideB <= 0;
//	const MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM = 179;
//	let validDataForAngles = angleInDegrees < 0 || angleInDegrees > MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM;	
//	if (isFilled || isSideANotValid || isSideBNotValid || validDataForAngles) {
//        return '-';
//    } else {
//		return roundToThousandth(areaOfParallelogram(sideA, sideB, angleInDegrees) / sideA);
//	}
//}
//console.log(heightOfParallelogram(2,3,30))
////  I suppose sides are more than 0, and angle will be between 0 and 180 degrees
//function areaOfDisk(radius) {
//    if (radius <= 0 || typeof radius === 'undefined') {
//        return '-';
//    } else {
//        const POWER = 2;
//        return roundToThousandth(Math.PI * Math.pow(radius, POWER));
//    }
//}
//function lengthOfDisk(radius) {
//    if (radius <= 0 || typeof radius === 'undefined') {
//        return '-';
//    } else {
//        const COEFFICIENT = 2;
//        return roundToThousandth(Math.PI * radius * COEFFICIENT);
//    }
//}
//// radius is more than 0
//function areaOfEllipse(horizontalRadius, verticalRadius) {
//    let dataValidations = horizontalRadius <= 0 || verticalRadius <= 0;
//    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
//        return '-';
//    } else {
//        return roundToThousandth(Math.PI * horizontalRadius * verticalRadius);
//    }
//}
//function lengthOfEllipse(horizontalRadius, verticalRadius) {
//    let dataValidations = horizontalRadius <= 0 || verticalRadius <= 0;
//    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
//        return '-';
//    } else {
//        const COEFFICIENT = 2;
//        const POWER = 2;
//        let processOfCalc = Math.sqrt((Math.pow(horizontalRadius, POWER) + Math.pow(verticalRadius, POWER)) / COEFFICIENT);
//        return roundToThousandth(Math.PI * COEFFICIENT * processOfCalc);
//    }
//}
//// horizontal and vertacal radius are more than 0
//function areaOfSquare(side) {
//    if (side <= 0 || typeof side === 'undefined') {
//        return '-'
//    } else {
//        const POWER = 2;
//        return roundToThousandth(Math.pow(side, POWER))
//    }
//}
//function diagonalOfSquare(side) {
//    return diagonalOfRectangle(side, side);
//}
//function areaOfRectangle(side1, side2) {
//    const ANGLE_OF_PARALLELOGRAM_FOR_RECTANGLE = 90;
//    return areaOfParallelogram(side1, side2, ANGLE_OF_PARALLELOGRAM_FOR_RECTANGLE);
//}
//function diagonalOfRectangle(sideA, sideB) {
//    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined';
//    let isSideANotValid = sideA <= 0;
//    let isSideBNotValid = sideB <= 0;
//    if (isFilled || isSideANotValid || isSideBNotValid) {
//        return '-';
//    } else {
//        return roundToThousandth(Math.hypot(sideA, sideB));
//    }
//}
//function areaOfRightTriangle(cathetus1, cathetus2) {
//    const RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE = 2;
//     let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
//    let isSideANotValid = cathetus1 <= 0;
//    let isSideBNotValid = cathetus2 <= 0;
//    if (isFilled || isSideANotValid || isSideBNotValid) {
//        return '-'
//    } else {
//    return roundToThousandth(areaOfRectangle(cathetus1, cathetus2) / RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE)      
//    } 
//}
//function hypotenuseOfRightTriangle(cathetus1, cathetus2) {
//    return diagonalOfRectangle(cathetus1, cathetus2)
//}
//function heightOfRightTriangle(cathetus1, cathetus2) {
//    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
//    let isSideANotValid = cathetus1 <= 0;
//    let isSideBNotValid = cathetus2 <= 0;
//    if (isFilled || isSideANotValid || isSideBNotValid) {
//        return '-'
//    } else {
//        const COEFFICIENT = 2;
//        let areaOfTriangle = areaOfRightTriangle(cathetus1, cathetus2);
//        let hypotenuse = hypotenuseOfRightTriangle(cathetus1, cathetus2);
//        return roundToThousandth(COEFFICIENT * areaOfTriangle / hypotenuse);
//    }
//}
//function angleA(cathetus1, cathetus2) {
//    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
//    let isSideANotValid = cathetus1 <= 0;
//    let isSideBNotValid = cathetus2 <= 0;
//    if (isFilled || isSideANotValid || isSideBNotValid) {
//        return '-'
//    } else {
//		const DEGREES_IN_RADIANS = 180;
//		return roundToThousandth(DEGREES_IN_RADIANS/Math.PI*Math.acos(cathetus1/hypotenuseOfRightTriangle(cathetus1,cathetus2)));
//	}	
//}
//function angleB(cathetus1, cathetus2) {
//    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
//    let isSideANotValid = cathetus1 <= 0;
//    let isSideBNotValid = cathetus2 <= 0;
//    if (isFilled || isSideANotValid || isSideBNotValid) {
//        return '-'
//    } else {
//		const DEGREES_IN_RADIANS = 180;
//		return roundToThousandth(DEGREES_IN_RADIANS/Math.PI*Math.acos(cathetus1/hypotenuseOfRightTriangle(cathetus1,cathetus2)));
//	}	
//}

//

function roundToThousandth (num) {
	const FOR_ROUNDING = 1000;
	return Math.round(num*FOR_ROUNDING)/FOR_ROUNDING;
}
class Ellips {
	constructor (horisontalRadius,verticalRadius) {
		this.horisontalRadius = horisontalRadius;
		if (typeof verticalRadius==='undefined') {
			this.verticalRadius = horisontalRadius;	
		} else {
			this.verticalRadius = verticalRadius;
		}
	}
	calcArea() {
		return roundToThousandth(Math.PI*this.horisontalRadius*this.verticalRadius);
	}
	calcLength() {
        const COEFFICIENT = 2;
        const POWER = 2;
        let processOfCalc = Math.sqrt((Math.pow(this.horisontalRadius, POWER) + Math.pow(this.verticalRadius, POWER)) / COEFFICIENT);
        return roundToThousandth(Math.PI * COEFFICIENT * processOfCalc);		
	}
}
//examples of calling
const ellipse = new Ellips(2,3);
const disk = new Ellips(2);
console.log('area of ellipse',ellipse.calcArea())
console.log('length of ellipse',ellipse.calcLength())
console.log('area of disk',disk.calcArea())
console.log('length of disk',disk.calcLength())
console.log('-------------')
//group of quadrangles
class Paralelogram {
	constructor(sideA,sideB,angleInDegrees) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.angle = angleInDegrees;	
	}
	calcArea() {
		const AMOUNT_OF_DEGREES_IN_RADIAN = 180;
		let angleInRadians = this.angle/AMOUNT_OF_DEGREES_IN_RADIAN*Math.PI;
		return roundToThousandth(this.sideA*this.sideB*Math.sin(angleInRadians));		
	}
	calcHeight() {
		return roundToThousandth(this.calcArea()/this.sideA);		
	}
}
//examples of calling for paralelogram
console.log('-------')
console.log('paralelogram with sides 2,3 and angle 30')
const paralelogram = new Paralelogram(2,3,30); 
console.log('area of paralelogram',paralelogram.calcArea())
console.log('height of paralelogram',paralelogram.calcHeight())

class Rectangle{
	constructor(sideA,sideB) {
		if(typeof sideB === 'undefined') {
			this.sideA = sideA;
			this.sideB = sideA;
		} else {
			this.sideA = sideA;
			this.sideB = sideB;			
		}
	}
	calcArea() {
		return roundToThousandth(this.sideA*this.sideB) 		
	}
	calcDiagonal() {
		return roundToThousandth(Math.hypot(this.sideA,this.sideB))
	}
}

const rectangle = new Rectangle(2,3)
const square = new Rectangle(3)
//examples of calling for paralelogram
console.log('-------')
console.log('rectangle with sides 2,3')
console.log('area of rectangle',rectangle.calcArea())
console.log('diagonal of rectangle',rectangle.calcDiagonal())
console.log('-------')
console.log('square with sides 3')
console.log('area of square',square.calcArea())
console.log('diagonal of square',square.calcDiagonal())
//triangle
class RightTriangle {
	constructor (cathetus1,cathetus2) {
		this.cathetus1 = cathetus1; 
		this.cathetus2 = cathetus2; 
	}
	
	//we know right triangle is a half of rectangle. Diagonal of a rectangle divides the rectangle into two equal right triangles
	
	calcArea() {
		const RECTANGLE = new Rectangle(this.cathetus1,this.cathetus2);
		const AMOUNT_OF_RIGHT_TRIANGLES_IN_RECTANGLE = 2;
		return roundToThousandth(RECTANGLE.calcArea()/AMOUNT_OF_RIGHT_TRIANGLES_IN_RECTANGLE);
	}
	calcHypotenuse() {
		const RECTANGLE = new Rectangle(this.cathetus1,this.cathetus2);
		return RECTANGLE.calcDiagonal();
	}
	calcHeight() {
		const AMOUNT_OF_RIGHT_TRIANGLES_IN_RECTANGLE = 2;
        return roundToThousandth(AMOUNT_OF_RIGHT_TRIANGLES_IN_RECTANGLE*this.calcArea()/this.calcHypotenuse());		
	}
	calcAngleA() {
		const DEGREES_IN_RADIANS = 180;
		let hypotenuse = Math.hypot(this.cathetus1,this.cathetus2);
		// I again calculate Hypotenuse because of in calcHypotenuse() I rounded result and now we can't get precise result 
		return roundToThousandth(DEGREES_IN_RADIANS/Math.PI*Math.acos(this.cathetus1/hypotenuse));		
	}
	calcAngleB() {
		let hypotenuse = Math.hypot(this.cathetus1,this.cathetus2);
		// I again calculate Hypotenuse because of in calcHypotenuse() I rounded result and now we can't get precise result 		
		const DEGREES_IN_RADIANS = 180;
		return roundToThousandth(DEGREES_IN_RADIANS/Math.PI*Math.acos(this.cathetus2/hypotenuse));			
	}
	calcAngleC() {
		const RIGHT_ANGLE = 90;
		//angle opposite of hypotenuse
		return RIGHT_ANGLE;
	}
}
const trianle = new RightTriangle(1,Math.sqrt(3));
console.log('-------')
console.log('right triangle with cathetuses 1,sqrt(3)')
console.log('area of triangle',trianle.calcArea())
console.log('Hypotenuse of rectangle',trianle.calcHypotenuse())
console.log('Height of triangle to Hypotenuse',trianle.calcHeight())
console.log('angle A',trianle.calcAngleA())
console.log('angle B',trianle.calcAngleB())
console.log('angle C',trianle.calcAngleC())