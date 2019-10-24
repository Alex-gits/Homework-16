// 1 и 2. Реализовать конструктор и метод в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//    }

//    Component.prototype.setText = function (text) {
//     this.node.textContent = text;
//    };

// Пример вызова:
// const comp = new Component('span');

class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text;
    }
}

const comp = new Component('span');
comp.setText('Just testing some random text');

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить,
// вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки
// текущего числа с которым производятся вычисления.

class Calculator {
    constructor(value = 0) {
        this.hasError = !this.validator(value);
        this.result = value || 0;
    }

    validator(value) {
        if (typeof (value) === 'number') {
            return true;
        } else {
            throw new TypeError('Some shit happened');
        }
    }

    sum(num) {
        if (this.hasError || !this.validator(num)) {
            console.log('Ошибка в типе аргумента!');
            return this.result;
        }

        return this.result += num;
    }

    sub(num) {
        if (this.hasError || !this.validator(num)) {
            console.log('Ошибка в типе аргумента!');
            return this.result;
        }

        return this.result -= num;
    }

    mult(num) {
        if (this.hasError || !this.validator(num)) {
            console.log('Ошибка в типе аргумента!');
            return this.result;
        }

        return this.result *= num;
    }

    div(num) {
        if (this.hasError || !this.validator(num)) {
            console.log('Ошибка в типе аргумента!');
            return this.result;
        }

        return this.result /= num;
    }

    get getResult() {
        return this.result;
    }

    set getResult(getResult) {
        this.result = getResult;
    }
}

const calc = new Calculator(10);


// 4. Есть класс Planet
// function Planet(name) {
//  this.name = name;
//  this.getName = function () {
//  return 'Planet name is ' + this.name;
//  }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

class Planet {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return 'Planet name is ' + this.name;
    }
}

const planet = new Planet('Earth');

class PlanetWithSatellite extends Planet {
    constructor(name, satelliteName) {
        super(name);
        this.satelliteName = satelliteName;
    }

    getName() {
        const origRes = super.getName();
        return `${origRes}. The satellite is ${this.satelliteName}`
    }
}

const earth = new PlanetWithSatellite('Earth', 'Moon');

// 5. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество
//     этажей” и метод “установить количество этажей”).
//     Создайте наследников этого класса:
//     классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//     У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество
//     этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//     У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество
//     этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
//     От каждого класса создать экземпляр (дом, торговый центр)

class Building {
    constructor(name, floors) {
        this.name = name;
        this.floors = floors;
    }

    getFloors() {
        return this.floors;
    }

    setFloors(num) {
        return this.floors = num;
    }
}

const house = new Building('First', 10);


class ResidentialBuilding extends Building {
    constructor(name, floors, apartmentsPerFloor) {
        super(name, floors);
        this.apartmentsPerFloor = apartmentsPerFloor;
    }

    getFloors() {
        const origRes = super.getFloors();
        return { floors: origRes, apartments: origRes * this.apartmentsPerFloor };
    }
}

const resident = new ResidentialBuilding('Second', 20, 5);


class ShoppingCentre extends Building {
    constructor(name, floors, shopsPerFloor) {
        super(name, floors);
        this.shopsPerFloor = shopsPerFloor;
    }

    getFloors() {
        const origRes = super.getFloors();
        return { floors: origRes, shops: origRes * this.shopsPerFloor };
    }
}

const mall = new ShoppingCentre('Third', 5, 30);

// 6. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
// (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
// экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод
// “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function () {
    return `${this.name}: $${this.price}`;
}

const officeFurniture = new Furniture('Chair', 75);
officeFurniture.officeItem = 'Office Desk';

officeFurniture.getInfo = function () {
    const origRes = Furniture.prototype.getInfo.call(this);
    return `${origRes}, ${this.officeItem}: not available`
}



const homeFurniture = new Furniture('Bed', 100);
homeFurniture.homeItem = 'Cupboard';

homeFurniture.getInfo = function () {
    const origRes = Furniture.prototype.getInfo.call(this);
    return `${origRes}, ${this.homeItem}: not available`
}

// 7. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом
// “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть
// объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”:
// класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату
// (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о
// дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, regDate) {
    this.name = name;
    this.regDate = regDate;
}

User.prototype.getInfo = function () {
    return `${this.name} completed registration ${this.regDate}`;
}


function Admin(name, regDate, superAdmin = false) {
    if (typeof (superAdmin) !== 'boolean') {
        throw new TypeError('Wrong value');
    }

    User.apply(this, arguments);

    this._superAdmin = superAdmin;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfo = function () {
    const origRes = User.prototype.getInfo.call(this);
    return `${origRes}. Admin Status: ${this._superAdmin}`;
}

const admin = new Admin('Max', '21.01.2015', true)


function Guest(name, regDate, validDate) {
    User.apply(this, arguments);

    this.validDate = validDate;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfo = function () {
    const origRes = User.prototype.getInfo.call(this);
    return `${origRes}. Validation Date: ${this.validDate}`;
}

const guest = new Guest('Jim', '11.02.2019', '11.07.2019')