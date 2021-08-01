import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'User1',
    email: 'user1@example.com',
    hashedPassword: 'password',
    role: 'USER'
  },{
    name: 'User2',
    email: 'user2@example.com',
    hashedPassword: 'password',
    role: 'USER'
  },{
    name: 'Editor',
    email: 'editor@example.com',
    hashedPassword: 'password',
    role: 'EDITOR'
  },{
    name: 'Leader',
    email: 'leader@example.com',
    hashedPassword: 'password',
    role: 'LEADER'
  },{
    name: 'Admin',
    email: 'admin@example.com',
    hashedPassword: 'password',
    role: 'ADMIN'
  }
]

const eventData: Prisma.EventCreateInput[] = [
  {
    name: 'Event A Morning',
    description: 'An morning event',
    venue: '101 Old Rig Lane',
    startDateTime: "2021-11-22T08:57:31.123Z"
  },{
    name: 'Event A Evening',
    description: 'An evening event',
    venue: '101 Old Rig Lane',
    startDateTime: "2021-11-22T19:30:31.123Z"
  },{
    name: 'Event B Evening',
    description: 'An evening event',
    venue: '101 Old Rig Lane',
    startDateTime: "2021-11-25T19:30:31.123Z"
  },{
    name: 'Event C Evening',
    description: 'An evening event',
    venue: '101 Old Rig Lane',
    startDateTime: "2021-11-22T19:30:31.123Z"
  }
]

const instrumentData: Prisma.EventCreateInput[] = [
  {
    name: 'Bass',
    description: 'Base Guitar'
  },{
    name: 'Chello',
    description: 'Chello'
  },
  {
    name: 'Clarinet',
    description: 'Clarinet'
  },{
    name: 'Drums',
    description: 'Drum Set'
  },{
    name: 'French Horn',
    description: 'French Horn1'
  },{
    name: 'French Horn',
    description: 'French Horn2'
  },{
    name: 'Flute',
    description: 'Flute'
  },{
    name: 'Guitar',
    description: 'Guitar'
  },{
    name: 'Oboe',
    description: 'Oboe'
  },{
    name: 'Percussion',
    description: 'Percussion Set'
  },{
    name: 'Piano',
    description: 'Piano'
  },{
    name: 'Piccolo',
    description: 'Piccolo'
  },{
    name: 'Sax',
    description: 'Saxophone'
  },{
    name: 'Tbone1',
    description: 'Trombone1'
  },{
    name: 'Tbone',
    description: 'Trombone2'
  },{
    name: 'Trumpet',
    description: 'Trumpet1'
  },{
    name: 'Trumpet',
    description: 'Trumpet2'
  },{
    name: 'Tuba',
    description: 'Tuba'
  },
  {
    name: 'Viola',
    description: 'Viola'
  },
  {
    name: 'Violin',
    description: 'Violin'
  }
]

const songData = require('./song-data.json');

async function main() {
    console.log(`Start seeding ...`)

    songData.map(async one => {
      const song = await prisma.song.create({data: {
        title: one.title,
        alias: one.alias,
        arrangement: one.arrangement,
        startKey: one.startKey,
        tempoCd: one.tempoCd,
        startWords: one.startWords
      }} )
      console.log(`Created song with id: ${song.id}`)
    })
    
    for (const one of userData) {
      const user = await prisma.user.create({
        data: one,
      })
      console.log(`Created user with id: ${user.id}`)
    }

    for (const one of eventData) {
      const event = await prisma.event.create({
        data: one,
      })
      console.log(`Created event with id: ${event.id}`)
    }

    for (const one of instrumentData) {
      const instrument = await prisma.instrument.create({
        data: one,
      })
      console.log(`Created instrument with id: ${instrument.id}`)
    }

    console.log(`Seeding finished.`)
  }
  
main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })