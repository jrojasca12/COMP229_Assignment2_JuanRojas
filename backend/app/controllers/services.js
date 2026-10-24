let servicesModel = require('../models/services');

module.exports.getById = async function (req, res, next) {
  try {
    // Find one using the id sent in the parameter of the request
    let serviceId=req.params.id
    let service = await servicesModel.findOne({ _id: serviceId });
    res.json({
      success: true,
      message: "Service retrieved successfully.",
      data: service
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.add = async function (req, res, next) {
  try {
    // Get input from the request
    let service = servicesModel(req.body);

    // Insert into the DB
    let result = await servicesModel.create(service);
    console.log("Result: ", result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "Service added successfully.",
        data: result
      }
    );

  } catch (error) {
    console.log(error);
    next(error);
  }

}

module.exports.getAll = async function (req, res, next) {
  try {
    // Get all from the DB.
    let list = await servicesModel.find();

    // Send a response
    res.json({
        success: true,
        message: "Service list retrieved successfully.",
        data: list
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.update = async function (req, res, next) {
  try {
    // Get input from the request
    let updateService = servicesModel(req.body);
    updateService._id = req.params.id;

    // Submit the change
    let result = await servicesModel.updateOne({ _id: req.params.id },updateService);
    console.log("Result: ", result);

    
      res.status(200);
      res.json(
        {
          success: true,
          message: "Service updated successfully."
        }
      );
    

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.delete = async function (req, res, next) {
  try {
    // Delete  using the id sent in the parameter of the request
    let result = await servicesModel.deleteOne({ _id: req.params.id });
    console.log("Result: ", result);

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Service deleted successfully."
        }
      );
    } else {
      throw new Error('Service not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}