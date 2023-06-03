import type { NextApiRequest, NextApiResponse } from 'next'
import { Continent } from '../../../types/Continent';

import data from "../../../../data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Continent>
) {
  if(req.method === "GET") { 
      const { continents: continentRouter } = req.query 
      
      switch(continentRouter) {
        case "europe": {
          return res.json(data.europe); 
        }
        case "north-america": {
          return res.json(data['america-do-norte']);
        }
        case "africa": {
          return res.json(data.africa)
        }
        case "oceania": {
          return res.json(data.oceania);
        }
        case "south-america": {
          return res.json(data['america-do-sul']);
        }
        case "asia": {
          return res.json(data.asia);
        }
      }
    }
  }
  