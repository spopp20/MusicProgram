import { mutationField, nonNull } from 'nexus'

export const TokenDeleteOneMutation = mutationField('deleteOneToken', {
  type: 'Token',
  args: {
    where: nonNull('TokenWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.token.delete({
      where,
      ...select,
    })
  },
})
