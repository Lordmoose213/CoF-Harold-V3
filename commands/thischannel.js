module.exports = {

    // Command name
    name: "thischannel",

    // Usage
    usage: "Returns the channel ID",

    // Code
    execute(message, args) {

        // Get the channel ID
        const cID = message.channel;

        // Send the channel ID
        message.channel.send("This channel has an ID of: " + cID);

        // Return out of void
        return;
    },

}