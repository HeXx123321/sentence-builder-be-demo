const express = require('express')
const router = express.Router()

// Get 1
router.get('api/v1/sentences/:id', (req, res) => {
    res.send(req.params.id);

})
// Get all

router.get('api/v1/sentences/', (req, res) => {
    res.send('Get all');
})
// Create 1

router.post('api/v1/sentences/', (req, res) => {
    res.send('Create 1');

})
// Update 1
router.patch('api/v1/sentences/:id', (req, res) => {
    res.send(req.params.id);
})

// Delete

router.delete('api/v1/sentences/', (req, res) => {
    res.send(req.params.id);
})
// Refactor to sentences actually lol

module.exports = router