import { queryField, nonNull } from 'nexus'

export const SessionFindUniqueQuery = queryField('findUniqueSession', {
  type: 'Session',
  args: {
    where: nonNull('SessionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.session.findUnique({
      where,
      ...select,
    })
  },
})
