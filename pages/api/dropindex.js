import {DropIndex} from "../../lib/createIndexForSearch";

export default async function (req, res) {
    const val = await DropIndex();
    res.status(200).json({ success: true, message: val});
}