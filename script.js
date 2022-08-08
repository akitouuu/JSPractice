const rectangle = document.querySelector('.rectangle')
console.log(rectangle);


rectangle.addEventListener('click', () => {
    if(rectangle.style.background == 'blue') {
        rectangle.style = `
            background: aqua;
            border-radius: 50%;
            transition: .5s;
        `
    }else {
        rectangle.style = `
            background: blue;
            border-radius: 0%;
            transition: .5s;
        `
    }
})