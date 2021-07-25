import { queryField, list } from 'nexus'

export const InstrumentAggregateQuery = queryField('aggregateInstrument', {
  type: 'AggregateInstrument',
  args: {
    where: 'InstrumentWhereInput',
    orderBy: list('InstrumentOrderByInput'),
    cursor: 'InstrumentWhereUniqueInput',
    distinct: 'InstrumentScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instrument.aggregate({ ...args, ...select }) as any
  },
})
