import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/db';
import { AppError } from '../utils/AppError';
import { sendSuccess } from '../utils/response';

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, category, gst_number } = req.body;

    if (!name || !category || !gst_number) {
      throw new AppError('Missing required fields: name, category, gst_number', 400);
    }

    const existingVendor = await prisma.vendor.findUnique({ where: { gst_number } });
    if (existingVendor) {
      throw new AppError('Vendor with this GST number already exists', 409);
    }

    const newVendor = await prisma.vendor.create({
      data: {
        name,
        category,
        gst_number
      }
    });

    sendSuccess(res, newVendor, 201);
  } catch (error) {
    next(error);
  }
};

export const getAllVendors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vendors = await prisma.vendor.findMany();
    sendSuccess(res, vendors);
  } catch (error) {
    next(error);
  }
};\n