var fs=require('fs')

fs.mkdirSync('Rocky')

var archivo='Isabella'

fs.createWriteStream('Rocky/Isabella.txt')

fs.writeFileSync('Rocky/Isabella.txt','Mis bebes preciosos')

fs.unlinkSync('./Rocky/Isabella.txt')
console.log('Archivo eliminado con exito')

fs.rmdirSync('./Rocky')
console.log('Carpeta eliminado con exito')











