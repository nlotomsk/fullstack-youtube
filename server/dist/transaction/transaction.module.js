"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const transaction_controller_1 = require("./transaction.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const category_service_1 = require("../category/category.service");
const category_entity_1 = require("../category/entities/category.entity");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_entity_1.Transaction, category_entity_1.Category])],
        controllers: [transaction_controller_1.TransactionController],
        providers: [transaction_service_1.TransactionService, category_service_1.CategoryService],
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map