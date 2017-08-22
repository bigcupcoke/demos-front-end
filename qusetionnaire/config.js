//  questionnaire 类
var enableDebugMode = function(debugMode) {
    if (debugMode) {
        window.log = console.log.bind(console, '*** debug');
    } else {
        window.log = function() {};
    }
}

enableDebugMode(true);
