import app from 'firebase/app'
import 'firebase/database'

const config = {

}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.db = app.database()
    }


// DEFINE FIREBASE METHODS
// message is an object

send = message => this.db.ref('chat').push(message)

chat = () => this.db.ref('chat')


}

export default Firebase