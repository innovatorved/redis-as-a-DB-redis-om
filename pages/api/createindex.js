import {CreateIndex} from "../../lib/createIndexForSearch";

export default async function (req, res) {
    const val = await CreateIndex();
    res.status(200).json({ success: true, message: val});
}