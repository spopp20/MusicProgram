import { mutationField, nonNull } from 'nexus'

export const InstrumentCreateOneMutation = mutationField(
  'createOneInstrument',
  {
    type: nonNull('Instrument'),
    args: {
      data: nonNull('InstrumentCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.instrument.create({
        data,
        ...select,
      })
    },
  },
)
