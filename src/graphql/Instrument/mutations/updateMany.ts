import { mutationField, nonNull } from 'nexus'

export const InstrumentUpdateManyMutation = mutationField(
  'updateManyInstrument',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InstrumentWhereInput',
      data: nonNull('InstrumentUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.instrument.updateMany(args as any)
    },
  },
)
