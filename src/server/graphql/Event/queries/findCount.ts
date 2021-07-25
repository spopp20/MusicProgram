import { queryField, nonNull, list } from 'nexus'

export const EventFindCountQuery = queryField('findManyEventCount', {
  type: nonNull('Int'),
  args: {
    where: 'EventWhereInput',
    orderBy: list('EventOrderByInput'),
    cursor: 'EventWhereUniqueInput',
    distinct: 'EventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.event.count(args as any)
  },
})
