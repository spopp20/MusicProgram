import { mutationField, nonNull } from 'nexus'

export const EventUpdateManyMutation = mutationField('updateManyEvent', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'EventWhereInput',
    data: nonNull('EventUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.event.updateMany(args as any)
  },
})
