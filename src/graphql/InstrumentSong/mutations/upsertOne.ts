import { mutationField, nonNull } from 'nexus'

export const InstrumentSongUpsertOneMutation = mutationField(
  'upsertOneInstrumentSong',
  {
    type: nonNull('InstrumentSong'),
    args: {
      where: nonNull('InstrumentSongWhereUniqueInput'),
      create: nonNull('InstrumentSongCreateInput'),
      update: nonNull('InstrumentSongUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instrumentSong.upsert({
        ...args,
        ...select,
      })
    },
  },
)
