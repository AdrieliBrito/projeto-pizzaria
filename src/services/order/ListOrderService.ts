import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const pedidos = await prismaClient.pedido.findMany({
      orderBy: {
        criado_em: 'desc'
      },
    });

    return pedidos;
  }
}

export { ListOrderService };
