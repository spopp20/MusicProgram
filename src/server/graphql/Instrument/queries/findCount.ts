import { queryField, nonNull, list } from 'nexus'

export const InstrumentFindCountQuery = queryField('findManyInstrumentCount', {
  type: nonNull('Int'),
  args: {
    where: 'InstrumentWhereInput',
    orderBy: list('InstrumentOrderByInput'),
    cursor: 'InstrumentWhereUniqueInput',
    distinct: 'InstrumentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.instrument.count(args as any)
  },
})
