import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBeerById = async (req: Request, res: Response) => {
    try {
      const beer = await prisma.beer.findUnique({
        where: {
          id: req.params.id
        }
      });
      if (!beer) return res.status(404).json({ message: 'Beer not found' });
      res.json(beer);
    } catch (error) {
      res.status(500).json({ message: 'ID not found' });
    }
  };
