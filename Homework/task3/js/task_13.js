let radius = +prompt('Введите радиус')

let sq = ((Math.pow(radius,2)*Math.PI));
let per = (radius*2*Math.PI);
alert('Площадь круга - '+ sq.toFixed(2) + ', ' +'Периметр круга - ' + per.toFixed(2));