const read = require ('./read')
const add = require ('./add')
const del = require ('./del')

const cmd = process.argv

if (cmd[2]==="add"){
    const note = {
        "id" : cmd [3],
        "title" : cmd [4],
        "body" : cmd [5]
    }

    const oldNote = read()
    add (note,oldNote)
}
if (cmd[2] === 'read'){
    console.log(read())
}

if (cmd[2] === 'delete') {
    let id = cmd [3]
    let oldNote = read ()
    let del = require ('./del')

    del(id,oldNote);
    console.log(read());
}
    