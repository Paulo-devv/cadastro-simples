import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateBeer = async (req: Request, res: Response) => {
    try { 
        const beer = await prisma.beer.update({
            where: {
                id: req.params.id
            },
            data: req.body
        });
        res.json(beer)
    } catch (error) {
        res.status(400).json({ message: 'ID not found' })
    }
}

