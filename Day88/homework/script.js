
function manualEvery(array, forusing) {
    for (let i = 0; i < array.length; i++) {
        if (forusing(array[i]) === false) {
            return false;
        }
    }
    return true;
}



function allNumbersPositive(array) {
    return manualEvery(array, function(num) {
        return num > 0;
    });
}

function allStringsNonEmpty(array) {
    return manualEvery(array, function(str) {
        return str.length > 0;
    });
}


function allBooleansTrue(array) {
    return manualEvery(array, function(bool) {
        return bool === true;
    });
}

function allNumbersEven(array) {
    return manualEvery(array, function(num) {
        return num % 2 === 0;
    });
}


function manualSome(array, forusing) {
    for (let i = 0; i < array.length; i++) {
        if (forusing(array[i]) === true) {
            return true;
        }
    }
    return false;
}




function hasPassingGrades(array, passingGrade) {
    return manualSome(array, function(grade) {
        return grade > passingGrade;
    });
}


function containsAdminUsers(array) {
    return manualSome(array, function(user) {
        return user === 'admin';
    });
}

// ver gavige hasOverdueItems ras nishanvs Overdue


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function includesPrimeNumbers(array) {
    return manualSome(array, function(num) {
        return isPrime(num);
    });
}





function manualFind(array, forusing) {
    for (let i = 0; i < array.length; i++) {
        if (forusing(array[i]) === true) {
            return array[i];
        }
    }
    return undefined;
}












function findFirstNegativeNumber(array) {
    return manualFind(array, function(num) {
        return num < 0;
    });
}


function findUserById(array, id) {
    return manualFind(array, function(user) {
        return user.id === id;
    });
}

function findFirstIncompleteTask(array) {
    return manualFind(array, function(task) {
        return task === false;
    });
}



function findProductByName(array, name) {
    return manualFind(array, function(product) {
        return product === name;
    });
}




function manualFindIndex(array, forusing) {
    for (let i = 0; i < array.length; i++) {
        if (forusing(array[i]) === true) {
            return i;
        }
    }
    return -1;
}



function findIndexOfFirstPrimeNumber(array) {
    return manualFindIndex(array, function(num) {
        return isPrime(num);
    });
}







function findIndexOfUserWithAdminRole(array) {
    return manualFindIndex(array, function(user) {
        return user === 'admin';
    });
}



function findIndexOfFirstOverdueItem(array) {
    return manualFindIndex(array, function(item) {
        return item === true;
    });
}





function findIndexOfProductOutOfStock(array) {
    return manualFindIndex(array, function(product) {
        return product === false;
    });
}
