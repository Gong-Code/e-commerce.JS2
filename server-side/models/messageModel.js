exports.sendMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message){
        return res.status(400)
        .json({ message: 'name, email, and message are required fields.' })
    }

    return res.status(200).json({ success: 'Message sent successfully!'})
}

