import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteBeer = async (req: Request, res: Response) => {
    try {
        await prisma.beer.delete({
            where: {
                id: req.params.id
            }     
        });
        res.json({ message: 'Beer deleted' })
    } catch (error) {
        res.status(500).json({ message: 'ID not found' })
    }
};