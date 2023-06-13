import { Request, Response } from 'express';
import { FinalizedOrderService } from '../../services/order/FinalizedOrderService';

class FinalizedOrderController {
  async handle(req: Request, res: Response) {
    const { id_pedido } = req.params;

    const finalizarPedido = new FinalizedOrderService();

    const total = await finalizarPedido.execute(id_pedido);

    return res.json({ 
      total
    }); 
  }
}

export default FinalizedOrderController;
