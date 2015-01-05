.PHONY: dev-server
dev-server:
	./node_modules/.bin/webpack-dev-server --config ./config/webpack.dev.config.js

.PHONY: dev
dev:
	./bin/expedition --input=./src/client/data/cucumber.json --dir=./
	./node_modules/.bin/webpack-dev-server --config ./config/webpack.dev.config.js

.PHONY: clean
clean:
	rm -rf report
	rm -rf build

.PHONY: prepublish
prepublish:
	./node_modules/.bin/webpack --config ./config/webpack.production.config.js

.PHONY: postpublish
postpublish: clean
