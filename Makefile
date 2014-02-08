tests = test/mozilla_persona.js
sjs = node_modules/.bin/sjs --module ./test/macros.sjs --readable-names

mocha: node_modules $(tests)
	node_modules/.bin/mocha -R spec

node_modules: package.json
	npm i --production --silent

server: node_modules
	node_modules/.bin/start-selenium

%.js: test/macros.sjs %.sjs
	$(sjs) --output $*.js $*.sjs
