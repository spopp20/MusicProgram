import { mutationField, nonNull } from 'nexus'

export const InstrumentUpsertOneMutation = mutationField(
  'upsertOneInstrument',
  {
    type: nonNull('Instrument'),
    args: {
      where: nonNull('InstrumentWhereUniqueInput'),
      create: nonNull('InstrumentCreateInput'),
      update: nonNull('InstrumentUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instrument.upsert({
        ...args,
        ...select,
      })
    },
  },
)
