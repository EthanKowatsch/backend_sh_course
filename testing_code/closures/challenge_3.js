function createFormatter(prefix) {
    return function(message) {
        console.log(`${prefix}: ${message}`);
    }
}

const warningFormatter = createFormatter("WARNING");

warningFormatter("Low Disk Space");
warningFormatter("Server Overloaded");