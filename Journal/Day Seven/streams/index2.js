const fs = require('node:fs')
const zip = require('node:zlib')

const readableStream = fs.createReadStream('./sampleText.txt', {encoding:'utf-8', highWaterMark:2})

const Gzip = zip.createGzip()

const writeableStream = fs.createWriteStream('./sampleText2.txt.zip')

readableStream.pipe(Gzip).pipe(writeableStream)

