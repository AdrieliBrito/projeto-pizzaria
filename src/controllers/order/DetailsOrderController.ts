import { Request, Response } from 'express';
import { DetailsOrderService } from '../../services/order/DetailsOrderService';

class DetailsOrderController {
  async handle(req: Request, res: Response) {
    const { id_pedido } = req.body;

    const detalhesPedido = new DetailsOrderService();

    const itens = await detalhesPedido.execute(id_pedido);

    return res.json({ 
      itens
    }); 
  }
}

export default DetailsOrderController;
