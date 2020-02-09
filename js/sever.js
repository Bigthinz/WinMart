let http = require('http');




function onRequest(request, response){
	console.log('a user made a request' + request.url)
	response.writeHead(200,{'context-typw', 'text/html'})
	let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
	response.write('here is some data')
	myReadStream.pipe(res)
	response.end()
}


http.createServer(onRequest).listen(2000)
console.log('server is now runing')


