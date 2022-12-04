/**
 *  Events routes  /Events
 *  host + /api/event
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { fieldsValidator } = require("../middlewares/fieldsValidator");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();
// They all have to go through token validation
router.use( validateJWT );

// Get events
router.get('/', getEvents );

// create a new event
router.post(
    '/create', 
    [
        check('title', 'The title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').custom( isDate ),
        check('end', 'End date is mandatory').custom( isDate ),
        fieldsValidator,
    ],
    createEvent );

// Update event
router.put('/update/:id', updateEvent )

// Delete event
router.delete('/delete/:id', deleteEvent )

module.exports = router;
