"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Vehiculos = connections_1.default.define('Vehiculo', {
    marca: {
        type: sequelize_1.DataTypes.STRING
    },
    placa: {
        type: sequelize_1.DataTypes.STRING
    },
    anio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Vehiculos;
//# sourceMappingURL=vehiculo.js.map