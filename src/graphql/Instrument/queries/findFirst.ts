import { queryField, list } from 'nexus'

export const InstrumentFindFirstQuery = queryField('findFirstInstrument', {
  type: 'Instrument',
  args: {
    where: 'InstrumentWhereInput',
    orderBy: list('InstrumentOrderByInput'),
    cursor: 'InstrumentWhereUniqueInput',
    distinct: 'InstrumentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instrument.findFirst({
      ...args,
      ...select,
    })
  },
})
