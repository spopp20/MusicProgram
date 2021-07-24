import { mutationField, nonNull } from 'nexus'

export const SheetMusicDeleteOneMutation = mutationField(
  'deleteOneSheetMusic',
  {
    type: 'SheetMusic',
    args: {
      where: nonNull('SheetMusicWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.sheetMusic.delete({
        where,
        ...select,
      })
    },
  },
)
