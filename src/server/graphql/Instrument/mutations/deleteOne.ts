import { mutationField, nonNull } from 'nexus'

export const InstrumentDeleteOneMutation = mutationField(
  'deleteOneInstrument',
  {
    type: 'Instrument',
    args: {
      where: nonNull('InstrumentWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.instrument.delete({
        where,
        ...select,
      })
    },
  },
)
