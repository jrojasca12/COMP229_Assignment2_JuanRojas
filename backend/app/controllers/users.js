let usersModel = require('../models/users');

module.exports.getById = async function (req, res, next) {
  try {
    // Find one using the id sent in the parameter of the request
    let usersId=req.params.id
    let user = await usersModel.findOne({ _id: usersId });
    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: user
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.add = async function (req, res, next) {
  try {
    // Get input from the request
    let user = usersModel(req.body);

    // Insert into the DB
    let result = await usersModel.create(user);
    console.log("Result: ", result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "User added successfully.",
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
    let list = await usersModel.find();

    // Send a response
    res.json({
        success: true,
        message: "User list retrieved successfully.",
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
    let updateUser = usersModel(req.body);
    updateUser._id = req.params.id;

    // Submit the change
    let result = await usersModel.updateOne({ _id: req.params.id },updateUser);
    console.log("Result: ", result);

    
      res.status(200);
      res.json(
        {
          success: true,
          message: "User updated successfully."
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
    let result = await usersModel.deleteOne({ _id: req.params.id });
    console.log("Result: ", result);

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "User deleted successfully."
        }
      );
    } else {
      throw new Error('User not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}