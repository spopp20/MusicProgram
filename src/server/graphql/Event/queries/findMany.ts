import { queryField, nonNull, list } from 'nexus'

export const EventFindManyQuery = queryField('findManyEvent', {
  type: nonNull(list(nonNull('Event'))),
  args: {
    where: 'EventWhereInput',
    orderBy: list('EventOrderByInput'),
    cursor: 'EventWhereUniqueInput',
    distinct: 'EventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.event.findMany({
      ...args,
      ...select,
    })
  },
})
