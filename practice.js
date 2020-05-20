const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

//1 - Create a method to get all the files inside a given path
let files = fs.readdir('./',(files) => {   
    return files; 
});

//2 - Create a method to print all the files
//3 - Create a method to inverse sort and print the files of a given path
getAll = (path) => {
    console.log('Ordenado');
    fs.readdir(path, (err, files) => {
        (err) ? console.log(err) : console.log('Files: ', files);
    console.log('Reverse');
    fs.readdir(path, (err, files) => {
    (err) ? console.log(err) : console.log('Files: ', files.reverse());
    
    console.log('Contador');
    beginLetter(files,"l");
    })});
};

//4 - Create a method to get the amount of files starting with one letter
beginLetter = (vec,letter) => {
    let cont = 0;
    for( var i = 0; i < vec.length; i++)
    {
        if(vec[i].startsWith(letter)){
            cont++;
        }
    }
    console.log('Archivos que empiezan con la letra ' + letter + ': ' + cont);
};

getAll('./');