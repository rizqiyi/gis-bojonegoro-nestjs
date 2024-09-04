"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDrainageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_drainage_dto_1 = require("./create-drainage.dto");
class UpdateDrainageDto extends (0, mapped_types_1.PartialType)(create_drainage_dto_1.CreateDrainageDto) {
}
exports.UpdateDrainageDto = UpdateDrainageDto;
//# sourceMappingURL=update-drainage.dto.js.map