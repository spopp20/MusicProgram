import { mutationField, nonNull } from 'nexus'

export const SheetMusicDeleteManyMutation = mutationField(
  'deleteManySheetMusic',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SheetMusicWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.sheetMusic.deleteMany({ where } as any)
    },
  },
)
