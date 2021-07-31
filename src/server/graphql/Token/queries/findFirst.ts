import { queryField, list } from 'nexus'

export const TokenFindFirstQuery = queryField('findFirstToken', {
  type: 'Token',
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByInput'),
    cursor: 'TokenWhereUniqueInput',
    distinct: 'TokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.findFirst({
      ...args,
      ...select,
    })
  },
})
