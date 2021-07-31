import { queryField, nonNull, list } from 'nexus'

export const TokenFindManyQuery = queryField('findManyToken', {
  type: nonNull(list(nonNull('Token'))),
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByInput'),
    cursor: 'TokenWhereUniqueInput',
    distinct: 'TokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.findMany({
      ...args,
      ...select,
    })
  },
})
