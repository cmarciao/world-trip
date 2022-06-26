import { NextApiRequest, NextApiResponse } from "next";

import data from "../../../continents.json";

export default function continents(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.json(data);
}