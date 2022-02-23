let areaBoxes = document.querySelector('.box-container')

for (let currentBox = 1; currentBox <= 100; currentBox++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box');

    // Box Multipli di 3 e 5   
    if (currentBox % 5 == 0 && currentBox % 3 == 0) {
        boxes.classList.add('box', 'cinque', 'tre');
        boxes.innerHTML += 'fizzbuzz';
        areaBoxes.append(boxes);
    }
    //Box multipli di 3
    else if (currentBox % 3 == 0) {
        boxes.classList.add('box', 'tre');
        boxes.innerHTML += 'fizz';
        areaBoxes.append(boxes);

    } //Box Multipli di 5 
    else if (currentBox % 5 == 0) {
        boxes.classList.add('box', 'cinque');
        boxes.innerHTML += 'buzz';
        areaBoxes.append(boxes);
    }
    // Box   
    else if (currentBox) {
        boxes.classList.add('box');
        boxes.innerHTML += currentBox;
        areaBoxes.append(boxes);
    }
}