import { Request, Response } from 'express';
import { UpdateOrderService } from '../../services/order/UpdateOrderService';

class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const { id_pedido } = req.body;

    const updatePedido = new UpdateOrderService();

    const pedido = await updatePedido.execute(id_pedido);

    return res.json({ 
      message: 'Status do pedido alterado com sucesso!',
      pedido: pedido
    }); 
  }
}

export default UpdateOrderController;
