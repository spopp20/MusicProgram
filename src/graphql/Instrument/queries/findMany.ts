import { queryField, nonNull, list } from 'nexus'

export const InstrumentFindManyQuery = queryField('findManyInstrument', {
  type: nonNull(list(nonNull('Instrument'))),
  args: {
    where: 'InstrumentWhereInput',
    orderBy: list('InstrumentOrderByInput'),
    cursor: 'InstrumentWhereUniqueInput',
    distinct: 'InstrumentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instrument.findMany({
      ...args,
      ...select,
    })
  },
})
