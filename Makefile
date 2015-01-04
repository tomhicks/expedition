prepublish:
	./node_modules/.bin/webpack --config config/webpack.production.config.js

dev-server:
	./node_modules/.bin/webpack-dev-server --config config/webpack.dev.config.js

dev:
	cat ./src/client/data/cucumber.json | ./bin/expedition --dir=./
	./node_modules/.bin/webpack-dev-server --config config/webpack.dev.config.js
