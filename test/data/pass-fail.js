module.exports = {
    features: [{
        "name": "Verify charts",
        "result": "failure",
        "scenarios": [{
            "name": "US7 - Ability to compare spending in a certain category with the previous months",
            "result": "failure",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"Transactions\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I change the amount spent in category Gas for the current month",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I change the amount spent in category Gas for the previous month",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The chart for the current month is updated with the amount \"90.00\" for \"Gas\"",
                "result": "failure"
            }, {
                "keyword": "And ",
                "name": "The chart for the previous month is updated with the amount \"190.00\" for \"Gas\"",
                "result": "failure"
            }],
            "screenshot": {
                "url": "./screenshots/US7 - Ability to compare spending in a certain category with the previous months.png"
            },
            "exception": {
                "name": "AssertionError",
                "message": "expected '0.00' to deeply equal '90.00'",
                "showDiff": true,
                "actual": "0.00",
                "expected": "90.00",
                "stack": "AssertionError: expected '0.00' to deeply equal '90.00'"
            }
        }, {
            "name": "US8 - Ability to add new transaction and verify chart is plotted correctly",
            "result": "failure",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"Transactions\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I add a new transaction with category \"Telephone\" and amount \"35\" for the current month",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I add a new transaction with category \"Telephone\" and amount \"38\" for the previous month",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The chart for the current month is updated with the amount \"35.00\" for \"Telephone\"",
                "result": "failure"
            }, {
                "keyword": "And ",
                "name": "The chart for the previous month is updated with the amount \"38.00\" for \"Telephone\"",
                "result": "failure"
            }],
            "screenshot": {
                "url": "./screenshots/US8 - Ability to add new transaction and verify chart is plotted correctly.png"
            },
            "exception": {
                "name": "AssertionError",
                "message": "expected '0.00' to deeply equal '35.00'",
                "showDiff": true,
                "actual": "0.00",
                "expected": "35.00",
                "stack": "AssertionError: expected '0.00' to deeply equal '35.00'"
            }
        }]
    }, {
        "name": "Add transaction",
        "result": "failure",
        "scenarios": [{
            "name": "US1 - Adding a new transaction",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I enter valid transaction data in the New Transaction form",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the transaction",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The transaction details should be available under Transactions",
                "result": "success"
            }]
        }, {
            "name": "US2 - Add transaction and view additional information",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I enter valid transaction data in the New Transaction form",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The amount in the summary should be updated with the change",
                "result": "success"
            }]
        }, {
            "name": "US5 - Ability to increase or decrease transaction amount using slider",
            "result": "failure",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I enter valid transaction data in the New Transaction form",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I change the transaction amount using the slider",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The amount in the summary should be updated with the change",
                "result": "failure"
            }],
            "screenshot": {
                "url": "./screenshots/US5 - Ability to increase or decrease transaction amount using slider.png"
            },
            "exception": {
                "code": 7,
                "state": "no such element",
                "message": "no such element\n  (Session info: chrome=39.0.2171.71)\n  (Driver info: chromedriver=2.11.298611 (d1120fdf51badec2f7b63a96e19a58d4783de84d),platform=Mac OS X 10.10.0 x86_64)",
                "name": "NoSuchElementError",
                "stack": "NoSuchElementError: no such element\n  (Session info: chrome=39.0.2171.71)\n  (Driver info: chromedriver=2.11.298611 (d1120fdf51badec2f7b63a96e19a58d4783de84d),platform=Mac OS X 10.10.0 x86_64)\n    at new bot.Error (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/atoms/error.js:109:18)\n    at Object.bot.response.checkResponse (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/atoms/response.js:106:9)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:277:20\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at notifyAll (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)\n    at resolve (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)\n    at fulfill (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1406:10\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at notifyAll (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)\n    at resolve (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)\n    at fulfill (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at notifyAll (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)\n    at resolve (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)\n    at fulfill (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:617:49\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/http/http.js:96:5\n    at IncomingMessage.<anonymous> (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/http/index.js:122:7)\n    at IncomingMessage.EventEmitter.emit (events.js:117:20)\n    at _stream_readable.js:920:16\n    at process._tickCallback (node.js:415:13)\n==== async task ====\nWebElement.findElement(By.xpath(\".//*[normalize-space(text())=normalize-space(\\\"Show more\\\")]\"))\n    at webdriver.WebDriver.schedule (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:268:15)\n    at webdriver.WebElement.schedule_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:1646:23)\n    at webdriver.WebElement.findElement (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:1700:15)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/lib/support/widgets.js:300:21\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at notifyAll (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at then (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:414:7)\n    at resolve (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:303:18)\n    at fulfill (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at then (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:414:7)\n    at Object.webdriver.promise.asap (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:662:11)\n    at newFrame.then.e (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1555:25)\n    at /Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/goog/base.js:1243:15\n    at webdriver.promise.ControlFlow.runInNewFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)\n    at notify (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)\n    at notifyAll (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)\n    at resolve (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)\n    at fulfill (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)\n    at webdriver.promise.ControlFlow.resolveFrame_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1460:9)\n    at webdriver.promise.ControlFlow.getNextTask_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1429:12)\n    at webdriver.promise.ControlFlow.runEventLoop_ (/Users/tomhicks/local/lib/node_modules/pioneer/node_modules/selenium-webdriver/lib/webdriver/promise.js:1387:59)\n    at wrapper [as _onTimeout] (timers.js:252:14)\n    at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)",
                "webdriver_promise_error_": true
            }
        }]
    }, {
        "name": "Add accounts",
        "result": "success",
        "scenarios": [{
            "name": "US5 - Add new account",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Current Account\"",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I enter valid account information",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the account information",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The account details should be available under current accounts",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The account should be available to be selected from the list during Add Edit transaction",
                "result": "success"
            }]
        }]
    }, {
        "name": "edit accounts",
        "result": "success",
        "scenarios": [{
            "name": "US6 - Edit account details and save",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "I go to the menu item \"New Current Account\"",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I enter valid account information",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the account information",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I open the existing account",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I edit the Account Details",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the account information",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I open the existing account",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "The account details show up correctly in the accounts edit form",
                "result": "success"
            }]
        }]
    }, {
        "name": "Edit transaction",
        "result": "success",
        "scenarios": [{
            "name": "US3 - Edit and save transaction details",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I enter valid transaction data in the New Transaction form",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the transaction",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I open the existing transaction",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I edit the transaction details",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the transaction",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I open the existing transaction",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "the transaction details show up correctly in the edit form",
                "result": "success"
            }]
        }, {
            "name": "US4 - Edit and do not save transaction details",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an authenticated user",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"New Transaction\"",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I enter valid transaction data in the New Transaction form",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I save the transaction",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I open the existing transaction",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I edit the transaction details",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I go to the menu item \"Transactions\"",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I open the existing transaction",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "the transaction details should not be changed",
                "result": "success"
            }]
        }]
    }, {
        "name": "Login",
        "result": "success",
        "scenarios": [{
            "name": "Redirects to Login",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an unauthenticated user",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I arrive on the \"transactions\" page",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "I should be redirected to the \"login\" page",
                "result": "success"
            }]
        }, {
            "name": "Login",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an unauthenticated user",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I arrive on the \"login\" page",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I login",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "I should be on the \"home\" page",
                "result": "success"
            }]
        }, {
            "name": "Login and Redirect",
            "result": "success",
            "steps": [{
                "keyword": "Given ",
                "name": "I am an unauthenticated user",
                "result": "success"
            }, {
                "keyword": "When ",
                "name": "I arrive on the \"transactions\" page",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "I should be redirected to the \"login\" page",
                "result": "success"
            }, {
                "keyword": "And ",
                "name": "I login",
                "result": "success"
            }, {
                "keyword": "Then ",
                "name": "I should be redirected to the \"transactions\" page",
                "result": "success"
            }]
        }]
    }]
};
