"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrainageService = void 0;
const common_1 = require("@nestjs/common");
let DrainageService = class DrainageService {
    create(createDrainageDto) {
        return 'This action adds a new drainage';
    }
    findAll() {
        return `This action returns all drainage`;
    }
    findOne(id) {
        return `This action returns a #${id} drainage`;
    }
    update(id, updateDrainageDto) {
        return `This action updates a #${id} drainage`;
    }
    remove(id) {
        return `This action removes a #${id} drainage`;
    }
};
exports.DrainageService = DrainageService;
exports.DrainageService = DrainageService = __decorate([
    (0, common_1.Injectable)()
], DrainageService);
//# sourceMappingURL=drainage.service.js.map