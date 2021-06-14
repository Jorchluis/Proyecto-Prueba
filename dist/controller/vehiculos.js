"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehiculo = exports.putVehiculo = exports.postVehiculo = exports.getVehiculo = exports.getVehiculos = void 0;
const vehiculo_1 = __importDefault(require("../models/vehiculo"));
const getVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculos = yield vehiculo_1.default.findAll();
    res.json({ vehiculos });
});
exports.getVehiculos = getVehiculos;
const getVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehiculo = yield vehiculo_1.default.findByPk(id);
    if (vehiculo) {
        res.json(vehiculo);
    }
    else {
        res.status(404).json({
            msg: `No existe un registro de vehiculo con el id ${id}`
        });
    }
});
exports.getVehiculo = getVehiculo;
const postVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePlaca = yield vehiculo_1.default.findOne({
            where: {
                placa: body.placa
            }
        });
        if (existePlaca) {
            return res.status(400).json({
                msg: 'Ya existe un vehiculo con esta placa ' + body.placa
            });
        }
        const vehiculo = vehiculo_1.default.build(body);
        yield vehiculo.save();
        res.json(vehiculo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error Hable con el administrador",
            body
        });
    }
});
exports.postVehiculo = postVehiculo;
const putVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const vehiculo = yield vehiculo_1.default.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({
                msg: 'No existe una bodega con el id ' + id
            });
        }
        yield vehiculo.update(body);
        res.json(vehiculo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putVehiculo = putVehiculo;
const deleteVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehiculo = yield vehiculo_1.default.findByPk(id);
    if (!vehiculo) {
        return res.status(404).json({
            msg: 'No existe un registro con el id ' + id
        });
    }
    yield vehiculo.update({ estado: false });
    yield vehiculo.destroy();
    res.json(vehiculo);
});
exports.deleteVehiculo = deleteVehiculo;
//# sourceMappingURL=vehiculos.js.map