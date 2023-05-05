const rental = require("../schema/rental");
const user = require("../schema/users");
const vehicle = require("../schema/vehicle");

const vehicleBooking = async (req, res) => {
  try {
    const { firstname, lastname, wheels, vehicle, model, startdate, enddate } =
      req.body;
    const userBooking = await user({
      firstname: firstname,
      lastname: lastname,
      wheels: wheels,
      vehicle: vehicle,
      model: model,
      startdate: startdate,
      enddate: enddate,
    });

    const bookingCheck = await rental.find();
    if (
      bookingCheck.wheels == req.body.wheels &&
      bookingCheck.vehicle == req.body.vehicle &&
      bookingCheck.model == req.body.model
    ) {
      return res.status(200).send({
        message: "can not book this vehicle",
        data: userBooking,
        status: false,
      });
    } else {
      let savedRecord = await userBooking.save();
      if (savedRecord) {
        return res.status(201).send({
          data: userBooking,
          status: true,
        });
      } else {
        return res.status(401).send({
          message: "can not process",
          data: null,
          status: true,
        });
      }
    }
  } catch (error) {
    return res.status(201).send({
      data: null,
      status: false,
    });
  }
};

const rentalBook = async (req, res) => {
  const { user_id, vehicle_id, start_date, end_date } = req.body;
  const vehicle = await vehicle.findById(vehicle_id).populate("wheel");
  if (!vehicle) {
    return res.status(404).send("Vehicle not found");
  }
  const days = Math.ceil((end_date - start_date) / (1000 * 60 * 60 * 24));
  const total_cost = days * vehicle.daily_rate;
  const rental = new rental({
    user_id,
    vehicle_id,
    start_date,
    end_date,
    total_cost,
  });
  try {
    await rental.save();
    res.status(201).send(rental);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating rental");
  }
};

module.exports = { vehicleBooking, rentalBook };
