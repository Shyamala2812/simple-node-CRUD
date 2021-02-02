const express = require('express');
const controllers = require('../controller/profile');
const router = express.Router();
const upload = require('../multer/multer');
const data = [
    {
        name: 'documents', maxCount: 10
    },
    {
        name: 'profilePicture', maxCount: 10
    }
];
router.post('/create', upload.fields(data), controllers.createProfile);
router.get('/all', controllers.allProfiles);
router.get('/:id', controllers.oneProfile);
router.put('/:id', upload.fields(data), controllers.updateProfile);
router.delete('/:id', controllers.deleteProfile);


module.exports = router;