import { mutationField, nonNull } from 'nexus'

export const SheetMusicUpdateManyMutation = mutationField(
  'updateManySheetMusic',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SheetMusicWhereInput',
      data: nonNull('SheetMusicUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.sheetMusic.updateMany(args as any)
    },
  },
)
