import { Router } from 'express';
import handler from 'express-async-handler';
import auth from '../middleware/auth.mid.js';
import { OrderModel } from '../models/order.model.js';
import { OrderStatus } from '../constants/orderStatus.js';

const router = Router();
router.use(auth);

router.post(
  '/create',
  handler(async (req, res) => {
    try {
      const order = req.body;

      if (order.items.length <= 0) {
        return res.status(BAD_REQUEST).json({ error: 'Cart Is Empty!' }); // Send JSON response with error
      }

      // Delete any existing orders for the same user with status OrderStatus.NEW
      await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW,
      });

      // Create a new order with the user ID
      const newOrder = new OrderModel({ ...order, user: req.user.id });
      await newOrder.save();
      
      // Send a JSON response with the created order
      res.status(201).json(newOrder); // 201 status code for resource creation
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' }); // Handle unexpected errors
    }
  })
);

export default router;
