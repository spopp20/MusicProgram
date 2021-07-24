import { mutationField, nonNull } from 'nexus'

export const SheetMusicUpsertOneMutation = mutationField(
  'upsertOneSheetMusic',
  {
    type: nonNull('SheetMusic'),
    args: {
      where: nonNull('SheetMusicWhereUniqueInput'),
      create: nonNull('SheetMusicCreateInput'),
      update: nonNull('SheetMusicUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.sheetMusic.upsert({
        ...args,
        ...select,
      })
    },
  },
)
