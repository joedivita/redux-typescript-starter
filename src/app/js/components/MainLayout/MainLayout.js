"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MainLayout = (function (_super) {
    __extends(MainLayout, _super);
    function MainLayout() {
        _super.apply(this, arguments);
    }
    MainLayout.prototype.render = function () {
        return (React.createElement("h1", null, "Hello World!"));
    };
    return MainLayout;
}(React.Component));
exports.MainLayout = MainLayout;
//# sourceMappingURL=MainLayout.js.map