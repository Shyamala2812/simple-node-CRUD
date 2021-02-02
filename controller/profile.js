const Profile = require('../model/model');
const upload = require('../multer/multer');


const createProfile = async (req, res, next) => {
    console.log(req.files)
    try {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
            profilePicture: `http://localhost:5000/uploads/${req.files.profilePicture[0].filename}`,
            documents: req.files.documents.map(item => `http://localhost:5000/uploads/${item.filename}`)
        };
        const result = await Profile.create(data);
        res.json(result);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

const allProfiles = async (req, res, next) => {
    try {
        const result = await Profile.find({});
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

const oneProfile = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Profile.findById(id);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

const deleteProfile = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Profile.deleteOne({_id: id});
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

const updateProfile = async (req, res, next) => {
    try {
        const id = req.params.id;

        const data = {
            ...req.body,
        };

        delete data.documents;
        delete data.profilePicture;

        if (req.files?.profilePicture?.[0]?.filename) {
            data.profilePicture = `http://localhost:5000/uploads/${req.files.profilePicture[0].filename}`
        }

        if (req.files?.documents?.length > 0) {
            data.documents = req.files.documents.map(item => `http://localhost:5000/uploads/${item.filename}`)
        }

        
        const result = await Profile.findByIdAndUpdate(id, data, {new: true});
        console.log(result)
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


module.exports = {
    createProfile,
    allProfiles,
    oneProfile,
    deleteProfile,
    updateProfile
}