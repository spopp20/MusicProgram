import { mutationField, nonNull } from 'nexus'

export const InstrumentSongUpdateManyMutation = mutationField(
  'updateManyInstrumentSong',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'InstrumentSongWhereInput',
      data: nonNull('InstrumentSongUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.instrumentSong.updateMany(args as any)
    },
  },
)
