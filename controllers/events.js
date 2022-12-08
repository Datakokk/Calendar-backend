const { response } = require("express")
const Event = require("../models/Event")

const getEvents = async (req, res = response) => {

    const event = await Event.find()
                        .populate('user', 'name')

    res.status(200).json({
        ok: true,
        event,
    })
}

const createEvent = async(req, res = response) => {

    const event = new Event(req.body);

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

const updateEvent = async (req, res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );
        if( !event ){
            return res.status(404).json({
                ok: false,
                msg: 'The event does not exist for that id'
            })
        };

        if( event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: 'you do not have privileges to edit this event'
            })
        };

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true });

        res.json({
            ok: true,
            event: updatedEvent,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to the administrator'
        })
    }
}

const deleteEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );
        
        if( !event ){
            return res.status(404).json({
                ok: false,
                msg: 'The event does not exist for that id'
            })
        };

        if( event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: 'you do not have privileges to delete this event'
            })
        };


        await Event.findByIdAndDelete( eventId )

        res.json({
            ok: true
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to the administrator'
        })
    }

}

module.exports = {
    getEvents, 
    createEvent,
    updateEvent,
    deleteEvent
}