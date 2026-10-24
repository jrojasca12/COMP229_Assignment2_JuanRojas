let projectModel = require('../models/projects');

module.exports.getById = async function (req, res, next) {
  try {
    // Find one using the id sent in the parameter of the request
    let projectId=req.params.id
    let project = await projectModel.findOne({ _id: projectId });
    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: project
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.add = async function (req, res, next) {
  try {
    // Get input from the request
    let project = projectModel(req.body);

    // Insert into the DB
    let result = await projectModel.create(project);
    console.log("Result: ", result);

    // Send a response
    res.status(200);
    res.json(
      {
        success: true,
        message: "Project added successfully.",
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
    let list = await projectModel.find();

    // Send a response
    res.json({
        success: true,
        message: "Project list retrieved successfully.",
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
    let updateProject = projectModel(req.body);
    updateProject._id = req.params.id;

    // Submit the change
    let result = await projectModel.updateOne({ _id: req.params.id },updateProject);
    console.log("Result: ", result);

    
      res.status(200);
      res.json(
        {
          success: true,
          message: "Project updated successfully."
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
    let result = await projectModel.deleteOne({ _id: req.params.id });
    console.log("Result: ", result);

    // Handle the result and send a response
    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Project deleted successfully."
        }
      );
    } else {
      throw new Error('Project not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}