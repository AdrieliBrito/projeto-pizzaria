import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order/ListOrderService';

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listUltimosPedidos = new ListOrderService();

    const pedidos = await listUltimosPedidos.execute();

    return res.json({ 
      pedidos
    }); 
  }
}

export default ListOrderController;
