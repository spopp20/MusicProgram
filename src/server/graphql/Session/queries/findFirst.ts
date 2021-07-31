import { queryField, list } from 'nexus'

export const SessionFindFirstQuery = queryField('findFirstSession', {
  type: 'Session',
  args: {
    where: 'SessionWhereInput',
    orderBy: list('SessionOrderByInput'),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.findFirst({
      ...args,
      ...select,
    })
  },
})
