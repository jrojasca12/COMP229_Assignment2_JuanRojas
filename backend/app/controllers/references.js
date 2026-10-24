let referencesModel = require('../models/references');

module.exports.getById = async function (req, res, next) {
  try {
    // Find one using the id sent in the parameter of the request
    let referenceId=req.params.id
    let reference = await referencesModel.findOne({ _id: referenceId });
    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: reference
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.add = async function (req, res, next) {
  try {
    // Get input from the request
    let reference = referencesModel(req.body);

    // Insert into the DB
    let result = await referencesModel.create(reference);
    console.log("Result: ", result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "Reference added successfully.",
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
    let list = await referencesModel.find();

    // Send a response
    res.json({
        success: true,
        message: "Reference list retrieved successfully.",
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
    let updateReference = referencesModel(req.body);
    updateReference._id = req.params.id;
    // let updateReference = req.body;
    
    // Submit the change
    let result = await referencesModel.updateOne({ _id: req.params.id },updateReference);
    console.log("Result: ", result);

    // Handle the result: send a response.
    // if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Reference updated successfully."
        }
      );
    // } else {
    //   throw new Error('Reference not updated. Are you sure it exists?')
    // }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.delete = async function (req, res, next) {
  try {
    // Delete  using the id sent in the parameter of the request
    let result = await referencesModel.deleteOne({ _id: req.params.id });
    console.log("Result: ", result);

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Reference deleted successfully."
        }
      );
    } else {
      throw new Error('Reference not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}