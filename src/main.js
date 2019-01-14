import { Animal } from './animalfarm.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import horseIcon from './images/joe.jpeg';
// import berriesIcon from './images/berries.jpeg';
// import salmonIcon from './images/salmon.jpeg';
// import mooseIcon from './images/moose.jpeg';


let horseImg = document.getElementById('horse');
horseImg.src = horseIcon;
// let berriesImg = document.getElementById('berries');
// berriesImg.src = berriesIcon;
// let salmonImg = document.getElementById('salmon');
// salmonImg.src = salmonIcon;
// let mooseImg = document.getElementById('moose');
// mooseImg.src = mooseIcon;
let nameElement = document.getElementById("name");
let typeElement = document.getElementById("type");
let healthElement = document.getElementById("health");
let happinessElement = document.getElementById("happiness");

$(document).ready(function () {
    let myAnimal = new Animal("Joe", "Horse");
    console.log(myAnimal);
    myAnimal.setHunger();
    myAnimal.setHappiness();

    setTimeout(function () {
        alert("Click on buttons to feed, play with animal");
    }, 300);
    setInterval(update, 500);
    setInterval(updateHappiness, 500);

    nameElement.innerHTML = "Name: " + myAnimal.getName();
    typeElement.innerHTML = "Type: " + myAnimal.getType();
    happinessElement.innerHTML = "Happines: " + myAnimal.getHappiness();


    $("#passtime").on("click", function () {
        event.preventDefault();
        myAnimal.setHappiness();
        myAnimal.setHunger();
    })

    // berries.addEventListener("click", myBear.feed(5));
    $("#donut").on("click", function () {
        event.preventDefault();
        myAnimal.feed(10);

    })

    $("#chicken").on("click", function () {
        event.preventDefault();
        myAnimal.feed(20);

    })

    $("#cake").on("click", function () {
        event.preventDefault();
        myAnimal.feed(25);

    })

    $("#ball").on("click", function () {
        event.preventDefault();
        myAnimal.play(15);

    })

    $("#doll").on("click", function () {
        event.preventDefault();
        myAnimal.play(20);

    })

    $("#phone").on("click", function () {
        event.preventDefault();
        myAnimal.play(30);

    })



    function update() {
        let msg;
        msg = "Health: " + myAnimal.getHunger();

        if (myAnimal._health <= 0) {
            msg = "Your animal died.";
            healthElement.innerHTML = msg;
        } else {
            healthElement.innerHTML = msg;
        }
    }

    function updateHappiness() {
        let msg;
        msg = "Happiness: " + myAnimal.getHappiness();

        if (myAnimal._happiness <= 0) {
            msg = "Your animal died of unhappiness.";
            happinessElement.innerHTML = msg;
        } else {
            happinessElement.innerHTML = msg;
        }
    }


});
