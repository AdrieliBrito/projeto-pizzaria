import prismaClient from "../../prisma";

class DeleteItemService {
  async execute(id_item: string) {
    const item = await prismaClient.item.delete({
      where: {
        id: id_item,
      },
    });

    return item;
  }
}

export { DeleteItemService };
