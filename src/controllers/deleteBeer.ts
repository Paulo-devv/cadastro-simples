import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteBeer = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        await prisma.beer.delete({
            where: {
                id: id
            }
        });
        res.json({ message: 'Beer deleted' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'ID not found' });
    }
};