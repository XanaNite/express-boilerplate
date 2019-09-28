process.env.TZ = 'UTC' //Timezone set to UTC
process.env.NODE_ENV = 'test'

require('dotenv').config()
const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest