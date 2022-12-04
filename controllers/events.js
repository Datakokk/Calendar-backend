const { response } = require("express")
const Event = require("../models/Event")

const getEvents = (req, res = response) => {

    
    res.status(200).json({
        ok: true,
        msg: 'Get events',
    })
}

const createEvent = async(req, res = response) => {

    const event = new Event(req.body);
console.log(event)
    try {

        event.user = req.uid;
        const savedEvent = await event.save();
        
        res.status(200).json({
            ok: true,
            event: savedEvent,
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Does not create a event',
        })
    }

}

const updateEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msg: 'Update event',
    })
}

const deleteEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msg: 'Delete event',
    })
}

module.exports = {
    getEvents, 
    createEvent,
    updateEvent,
    deleteEvent
}