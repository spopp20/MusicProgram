import { mutationField, nonNull } from 'nexus'

export const InstrumentDeleteManyMutation = mutationField(
  'deleteManyInstrument',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InstrumentWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.instrument.deleteMany({ where } as any)
    },
  },
)
