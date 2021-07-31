import { queryField, list } from 'nexus'

export const TokenAggregateQuery = queryField('aggregateToken', {
  type: 'AggregateToken',
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByInput'),
    cursor: 'TokenWhereUniqueInput',
    distinct: 'TokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.token.aggregate({ ...args, ...select }) as any
  },
})
