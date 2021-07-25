import { mutationField, nonNull } from 'nexus'

export const InstrumentSongDeleteManyMutation = mutationField(
  'deleteManyInstrumentSong',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InstrumentSongWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.instrumentSong.deleteMany({ where } as any)
    },
  },
)
