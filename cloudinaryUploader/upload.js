const cloudinary = require('cloudinary');
const fs = require('fs');

require('dotenv').config({path: '../.env'})

let folderPath = "/Users/peter/Desktop/camera";

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

let count = 1;



const files = new Promise((resolve,reject)=>{
  fs.readdir(folderPath, (err, files) => {
    err ? reject(err) : resolve(files);
  })
})

const getSecureUrl = (aPath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(aPath, function(result) {
      resolve(`<p>${count++}</p><img src='${result.secure_url}' alt='mural'>` + "\n")
    })
  })
}

files.then(files => files.map(file => folderPath + '/' + file ))
     .then( (properPaths) => properPaths.map(getSecureUrl) )
     .then(arrayOfPromises => Promise.all(arrayOfPromises) )
     .then(values => {
        fs.writeFile('urls.txt', values, (err) => {
          if (err) {
            throw err
          }
          console.log('The file has been saved!')
        });
      })
//
//
// files.forEach(file => {
//   let filePath = folderPath + '/' + file;
// });




// console.log(message);
//
