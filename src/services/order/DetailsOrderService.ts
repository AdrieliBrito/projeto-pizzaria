import prismaClient from "../../prisma";

class DetailsOrderService {
  async execute(id_pedido: string) {
    const itens = await prismaClient.item.findMany({
      where: {
        id_pedido: id_pedido,
      },
    });

    return itens;
  }
}

export { DetailsOrderService };
