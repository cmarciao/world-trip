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
        case "europa": {
          return res.json(data.europa); 
        }
        case "america-do-norte": {
          return res.json(data['america-do-norte']);
        }
        case "africa": {
          return res.json(data.africa)
        }
        case "oceania": {
          return res.json(data.oceania);
        }
        case "america-do-sul": {
          return res.json(data['america-do-sul']);
        }
        case "asia": {
          return res.json(data.asia);
        }
      }
    }
  }
  