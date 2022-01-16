import CreateNote from "../../lib/createNote";

export default async function (req, res) {
    const { method, body } = req;
    switch (method) {
        case 'GET':
            try {
                res.status(200).json({ success: false, message: "GET request is not allowed" });

            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
            break;

        case 'POST':
            try {
                if ( body.title && body.description && body.title.length > 2 && body.description.length > 3) {
                    const id = await CreateNote(body);
                    if (id) {
                        res.status(200).json({ success: true, id })
                    }
                    else {
                        res.status(400).json({ success: false, message: "Note not created" })
                    }
                }
                else{
                    res.status(400).json({ success: false, message: "title and description must be at least 3 characters long" })
                }

            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
            break;

        default:
            try {
                res.status(200).json({ success: false, message: "Only Post Request is allowed" });

            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                })
            }
            break;
    }
}