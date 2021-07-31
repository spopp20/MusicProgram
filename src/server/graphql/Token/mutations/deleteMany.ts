import { mutationField, nonNull } from 'nexus'

export const TokenDeleteManyMutation = mutationField('deleteManyToken', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TokenWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.token.deleteMany({ where } as any)
  },
})
