import { mutationField, nonNull } from 'nexus'

export const EventUpdateOneMutation = mutationField('updateOneEvent', {
  type: nonNull('Event'),
  args: {
    where: nonNull('EventWhereUniqueInput'),
    data: nonNull('EventUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.event.update({
      where,
      data,
      ...select,
    })
  },
})
