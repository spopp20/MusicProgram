import { mutationField, nonNull } from 'nexus'

export const TagUpdateManyMutation = mutationField('updateManyTag', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TagWhereInput',
    data: nonNull('TagUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.updateMany(args as any)
  },
})
