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
exports.Giveaways = void 0;
const typeorm_1 = require("typeorm");
let Giveaways = class Giveaways {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Giveaways.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], Giveaways.prototype, "end", void 0);
Giveaways = __decorate([
    typeorm_1.Entity("giveaways")
], Giveaways);
exports.Giveaways = Giveaways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9HaXZlYXdheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBR2pFLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FZckIsQ0FBQTtBQVZHO0lBREMsZ0NBQXNCLEVBQUU7O3FDQUNiO0FBR1o7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzBDQUN2QjtBQUdqQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MENBQ3ZCO0FBR2pCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7c0NBQ2Y7QUFYSixTQUFTO0lBRHJCLGdCQUFNLENBQUMsV0FBVyxDQUFDO0dBQ1AsU0FBUyxDQVlyQjtBQVpZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuQEVudGl0eShcImdpdmVhd2F5c1wiKVxyXG5leHBvcnQgY2xhc3MgR2l2ZWF3YXlzIHtcclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIGlkITogbnVtYmVyO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAyMiB9KVxyXG4gICAgY2hhbm5lbCE6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjIgfSlcclxuICAgIG1lc3NhZ2UhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwiaW50ZWdlclwiIH0pXHJcbiAgICBlbmQhOiBudW1iZXI7XHJcbn0iXX0=