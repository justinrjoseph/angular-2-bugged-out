"use strict";
(function (STATUSES) {
    STATUSES[STATUSES['Logged'] = 1] = 'Logged';
    STATUSES[STATUSES['Recreated'] = 2] = 'Recreated';
    STATUSES[STATUSES['In Progress'] = 3] = 'In Progress';
    STATUSES[STATUSES['Fixed'] = 4] = 'Fixed';
    STATUSES[STATUSES['Declined'] = 5] = 'Declined';
})(exports.STATUSES || (exports.STATUSES = {}));
var STATUSES = exports.STATUSES;
(function (SEVERITIES) {
    SEVERITIES[SEVERITIES['Low'] = 1] = 'Low';
    SEVERITIES[SEVERITIES['Medium'] = 2] = 'Medium';
    SEVERITIES[SEVERITIES['Severe'] = 3] = 'Severe';
    SEVERITIES[SEVERITIES['Cosmetic'] = 4] = 'Cosmetic';
})(exports.SEVERITIES || (exports.SEVERITIES = {}));
var SEVERITIES = exports.SEVERITIES;
//# sourceMappingURL=constants.js.map