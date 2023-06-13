import prismaClient from "../../prisma";

class UpdateOrderService {
  async execute(id_pedido: string) {
    const pedido = await prismaClient.pedido.update({
      where: {
        id: id_pedido,
      },
      data: {
        rascunho: false,
      },
    });
    return pedido;
  }
}

export { UpdateOrderService };
