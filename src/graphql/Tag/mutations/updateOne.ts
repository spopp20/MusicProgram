import { mutationField, nonNull } from 'nexus'

export const TagUpdateOneMutation = mutationField('updateOneTag', {
  type: nonNull('Tag'),
  args: {
    where: nonNull('TagWhereUniqueInput'),
    data: nonNull('TagUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.tag.update({
      where,
      data,
      ...select,
    })
  },
})
