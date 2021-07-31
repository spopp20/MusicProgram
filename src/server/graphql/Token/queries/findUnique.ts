import { queryField, nonNull } from 'nexus'

export const TokenFindUniqueQuery = queryField('findUniqueToken', {
  type: 'Token',
  args: {
    where: nonNull('TokenWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.token.findUnique({
      where,
      ...select,
    })
  },
})
