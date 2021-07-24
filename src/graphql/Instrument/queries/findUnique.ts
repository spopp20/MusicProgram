import { queryField, nonNull } from 'nexus'

export const InstrumentFindUniqueQuery = queryField('findUniqueInstrument', {
  type: 'Instrument',
  args: {
    where: nonNull('InstrumentWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.instrument.findUnique({
      where,
      ...select,
    })
  },
})
