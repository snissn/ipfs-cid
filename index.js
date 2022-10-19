import * as IPFS from 'ipfs-core'
import fs from 'fs'

const fileData = fs.readFileSync("index.js")

const ipfs = await IPFS.create({config:{Addresses:{Swarm:[]}}})//create without connecting to any peers since we only want to hash files
const { cid } = await ipfs.add(fileData, {chunker:"size-1048576", onlyHash:true, cidVersion:1})
console.log(cid.toString())
process.exit(0)

