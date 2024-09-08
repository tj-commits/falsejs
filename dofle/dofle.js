const fs = require('node:fs')
const path = require('node:path')
const open = require('open')
const randomItem = require('lodash').sample

const photosDirectory = path.join(__dirname, 'photos')
const photos = fs.readdirSync(photosDirectory).filter(directory => !directory.startsWith('.'))
let randomPhoto = randomItem(photos)

const lastPicPath = path.join(__dirname, '.last-photo')
if (fs.existsSync(lastPicPath) && fs.readFileSync(lastPicPath, 'utf8') === randomPhoto) {
	randomPhoto = randomItem(photos)
}

fs.writeFileSync(lastPicPath, randomPhoto);

(async () => {
	await open(path.join(photosDirectory, randomPhoto));
})()