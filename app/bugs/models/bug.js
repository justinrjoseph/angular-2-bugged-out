"use strict";
var Bug = (function () {
    function Bug(id, title, description, status, severity, createdBy, createdDate, updatedBy, updatedDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.severity = severity;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.js.map