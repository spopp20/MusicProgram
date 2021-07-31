import { mutationField, nonNull } from 'nexus'

export const TokenUpdateOneMutation = mutationField('updateOneToken', {
  type: nonNull('Token'),
  args: {
    where: nonNull('TokenWhereUniqueInput'),
    data: nonNull('TokenUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.token.update({
      where,
      data,
      ...select,
    })
  },
})
