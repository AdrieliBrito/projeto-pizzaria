import { Request, Response } from 'express';
import { DeleteItemService } from '../../services/order/RemoveItemService';

class DeleteItemController {
  async handle(req: Request, res: Response) {
    const { id_item } = req.body

    const deleteItem = new DeleteItemService();

    const item = await deleteItem.execute(id_item);

    return res.json({
      message: 'Item removido com sucesso!',
      item: item
    }); 
  }
}

export default DeleteItemController;
