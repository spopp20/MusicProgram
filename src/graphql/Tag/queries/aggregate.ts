import { queryField, list } from 'nexus'

export const TagAggregateQuery = queryField('aggregateTag', {
  type: 'AggregateTag',
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByInput'),
    cursor: 'TagWhereUniqueInput',
    distinct: 'TagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.aggregate({ ...args, ...select }) as any
  },
})
