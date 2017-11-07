const path = require('path');
const thuisbezorgdService = require(path.join(__dirname, 'thuisbezorgd-services'));

exports.scrape = scrape;

/**
 * @return {Promise} A promise that resolves with all the orders as JSON object
 */
function scrape() {

    const argv = process.argv;
    const program = path.basename(argv[1]);

    let username;
    let password;
    let debug = false;

    if (argv.length > 2) {
        username = argv[2];
    }
    if (argv.length > 3) {
        password = argv[3];
    }
    if (argv.length > 5) {
        debug = '--debug' === argv[4];
    }

    // Test if username and password are both supplied.
    if (!username || !password) {
        console.error('Error:');
        console.error(`Username and password both needs to be supplied as argument to ${program}`);
        console.error('');
        process.exit(1);
    }

    const configuration = {
        debug: debug,
        thuisbezorgdUsername: username,
        thuisbezorgdPassword: password
    };

    return thuisbezorgdService.getOrders(configuration)
}

