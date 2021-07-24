import { mutationField, nonNull } from 'nexus'

export const InstrumentUpdateOneMutation = mutationField(
  'updateOneInstrument',
  {
    type: nonNull('Instrument'),
    args: {
      where: nonNull('InstrumentWhereUniqueInput'),
      data: nonNull('InstrumentUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.instrument.update({
        where,
        data,
        ...select,
      })
    },
  },
)
