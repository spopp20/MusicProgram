import { queryField, list } from 'nexus'

export const EventFindFirstQuery = queryField('findFirstEvent', {
  type: 'Event',
  args: {
    where: 'EventWhereInput',
    orderBy: list('EventOrderByInput'),
    cursor: 'EventWhereUniqueInput',
    distinct: 'EventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.event.findFirst({
      ...args,
      ...select,
    })
  },
})
