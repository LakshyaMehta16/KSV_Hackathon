import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/db';
import { sendSuccess } from '../utils/response';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        full_name: true,
        role: true,
        created_at: true
      }
    });

    sendSuccess(res, users);
  } catch (error) {
    next(error);
  }
};\n