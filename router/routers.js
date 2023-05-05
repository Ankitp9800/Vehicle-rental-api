const { vehicleBooking, rentalBook } = require("../controller/user");

const router = require("express").Router();


router.post("/booking",vehicleBooking);
router.post("/rental/booking",rentalBook);


module.exports = router;
