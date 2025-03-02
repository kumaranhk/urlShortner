import { urlModel } from "../../models/url.model.js";
import crypto from 'crypto';


export const urlController = {
    create: async (req, res) => {
        const { url } = req.body;
        const user = req.user;
        try {
            const uuid = crypto.randomUUID();
            const shortened = await urlModel.create({
                actualurl: url,
                shrinkedurl: uuid,
                creatorId: user._id,
                clickedCount: 0
            })
            return res.status(200).json({ shortened });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Something went wrong' });
        }
    },
    read: async (req, res) => {
        const user = req.user;
        const { id } = req.params;
        try {
            if (id) {
                const url = await urlModel.find({ creatorId: user._id, _id: id })
                return res.json({ data: url });
            }
            const urls = await urlModel.find({ creatorId: user._id }, { __v: 0 });
            return res.json({ data: urls });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Something went wrong' })
        }
    },
    navigateToactual: async (req, res) => {
        const { id } = req.params;
        try {
            const url = await urlModel.findOne({ shrinkedurl: id }).lean();
            console.log
            if (!url) {
                return res.status(404).json({ msg: 'Requested URL not found' });
            }
            await urlModel.updateOne({ _id: url._id }, { $inc: { clickedCount: 1 } });
            // return res.redirect(301, url.actualurl);
            return res.status(200).json({ url: url.actualurl }); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Redirection failed' });
        }

    },
    update: () => { },
    remove: async (req, res) => {
        const user = req.user;
        const { id } = req.params;
        try {
            const url = await urlModel.findOne({ _id: id, creatorId: user._id });
            if (!url) {
                return res.status(404).json({ msg: 'Requested URL not found' });
            }
            await urlModel.deleteOne({ _id: id });
            return res.status(200).json({ msg: "URL deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Something went wrong' })
        }
    },
}