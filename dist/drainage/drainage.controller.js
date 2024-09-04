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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrainageController = void 0;
const common_1 = require("@nestjs/common");
const drainage_service_1 = require("./drainage.service");
const create_drainage_dto_1 = require("./dto/create-drainage.dto");
const update_drainage_dto_1 = require("./dto/update-drainage.dto");
let DrainageController = class DrainageController {
    constructor(drainageService) {
        this.drainageService = drainageService;
    }
    create(createDrainageDto) {
        return this.drainageService.create(createDrainageDto);
    }
    findAll() {
        return this.drainageService.findAll();
    }
    findOne(id) {
        return this.drainageService.findOne(+id);
    }
    update(id, updateDrainageDto) {
        return this.drainageService.update(+id, updateDrainageDto);
    }
    remove(id) {
        return this.drainageService.remove(+id);
    }
};
exports.DrainageController = DrainageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_drainage_dto_1.CreateDrainageDto]),
    __metadata("design:returntype", void 0)
], DrainageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DrainageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DrainageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_drainage_dto_1.UpdateDrainageDto]),
    __metadata("design:returntype", void 0)
], DrainageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DrainageController.prototype, "remove", null);
exports.DrainageController = DrainageController = __decorate([
    (0, common_1.Controller)('drainage'),
    __metadata("design:paramtypes", [drainage_service_1.DrainageService])
], DrainageController);
//# sourceMappingURL=drainage.controller.js.map