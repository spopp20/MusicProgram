import { queryField, nonNull, list } from 'nexus'

export const TokenFindCountQuery = queryField('findManyTokenCount', {
  type: nonNull('Int'),
  args: {
    where: 'TokenWhereInput',
    orderBy: list('TokenOrderByInput'),
    cursor: 'TokenWhereUniqueInput',
    distinct: 'TokenScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.token.count(args as any)
  },
})
