import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const listBeers = async (req: Request, res: Response) => {
    try {
        const beers = await prisma.beer.findMany()
        res.json(beers)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to list'})
    }
};