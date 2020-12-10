"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warns = void 0;
const typeorm_1 = require("typeorm");
let Warns = class Warns {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Warns.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Warns.prototype, "moderator", void 0);
__decorate([
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], Warns.prototype, "reason", void 0);
Warns = __decorate([
    typeorm_1.Entity("warns")
], Warns);
exports.Warns = Warns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FybnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL1dhcm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFpRTtBQUdqRSxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFLO0NBZWpCLENBQUE7QUFiRztJQURDLGdDQUFzQixFQUFFOztpQ0FDYjtBQUdaO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOztvQ0FDekI7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7bUNBQzFCO0FBR2Q7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O3dDQUNyQjtBQUduQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7O3FDQUNUO0FBZFAsS0FBSztJQURqQixnQkFBTSxDQUFDLE9BQU8sQ0FBQztHQUNILEtBQUssQ0FlakI7QUFmWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbkBFbnRpdHkoXCJ3YXJuc1wiKVxyXG5leHBvcnQgY2xhc3MgV2FybnMge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQhOiBudW1iZXI7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyIH0pXHJcbiAgICBndWlsZCE6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjIgfSlcclxuICAgIHVzZXIhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDIyIH0pXHJcbiAgICBtb2RlcmF0b3IhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidGV4dFwiIH0pXHJcbiAgICByZWFzb24hOiBzdHJpbmc7XHJcbn0iXX0=