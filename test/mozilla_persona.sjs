assert = require('assert')
wdjs = require('webdriverjs')
wdopt = {desiredCapabilities: {browserName: 'chrome'}}
client = wdjs.remote(wdopt).init()
site = 'http://127.0.0.1:8000'

describe 'mozilla_persona' {
    this.timeout(300000)

    it 'works' (done) {
        client
        .url(site)
        .isVisible('.browserid-login', => (res) { assert(res) })
        .click('.browserid-login', => {})
        .pause(1000)
        .getCurrentTabId(=> (res) { console.log(res) })
        .getTabIds(=> (res) { console.log(res) })
        .end(done)
    }
}
