"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculos_1 = require("../controller/vehiculos");
const router = express_1.Router();
router.get('/', vehiculos_1.getVehiculos);
router.get('/:id', vehiculos_1.getVehiculo);
router.post('/', vehiculos_1.postVehiculo);
router.put('/:id', vehiculos_1.putVehiculo);
router.delete('/:id', vehiculos_1.deleteVehiculo);
exports.default = router;
//# sourceMappingURL=vehiculo.js.map