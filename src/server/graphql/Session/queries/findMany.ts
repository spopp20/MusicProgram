import { queryField, nonNull, list } from 'nexus'

export const SessionFindManyQuery = queryField('findManySession', {
  type: nonNull(list(nonNull('Session'))),
  args: {
    where: 'SessionWhereInput',
    orderBy: list('SessionOrderByInput'),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.findMany({
      ...args,
      ...select,
    })
  },
})
