import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/db';
import { AppError } from '../utils/AppError';
import { sendSuccess } from '../utils/response';

export const createRFQ = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, deadline, line_items } = req.body;

    if (!title || !category || !deadline || !line_items || !Array.isArray(line_items)) {
      throw new AppError('Invalid payload', 400);
    }

    const created_by = req.user!.userId;
    const year = new Date().getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31, 23, 59, 59, 999);

    const result = await prisma.$transaction(async (tx) => {
      const count = await tx.rFQ.count({
        where: {
          created_at: {
            gte: startOfYear,
            lte: endOfYear
          }
        }
      });
      
      const sequence = (count + 1).toString().padStart(4, '0');
      const rfq_number = `RFQ-${year}-${sequence}`;

      const newRFQ = await tx.rFQ.create({
        data: {
          rfq_number,
          title,
          category,
          deadline: new Date(deadline),
          status: 'PUBLISHED',
          created_by,
          lineItems: {
            create: line_items.map((item: any) => ({
              item_name: item.item_name,
              quantity: item.quantity,
              unit_type: item.unit_type
            }))
          }
        },
        include: {
          lineItems: true
        }
      });

      return newRFQ;
    });

    sendSuccess(res, result, 201);
  } catch (error) {
    next(error);
  }
};

export const getActiveRFQs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rfqs = await prisma.rFQ.findMany({
      where: {
        status: 'PUBLISHED'
      },
      include: {
        lineItems: true
      }
    });
    sendSuccess(res, rfqs);
  } catch (error) {
    next(error);
  }
};\n