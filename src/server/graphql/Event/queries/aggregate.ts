import { queryField, list } from 'nexus'

export const EventAggregateQuery = queryField('aggregateEvent', {
  type: 'AggregateEvent',
  args: {
    where: 'EventWhereInput',
    orderBy: list('EventOrderByInput'),
    cursor: 'EventWhereUniqueInput',
    distinct: 'EventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.event.aggregate({ ...args, ...select }) as any
  },
})
