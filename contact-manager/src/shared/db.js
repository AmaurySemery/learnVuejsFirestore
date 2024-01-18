import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({ timestampsInSnapshots: true });

export default {
    create(contact) {
        return Firestore.collection('contacts').add(contact);
    },
    read() {
        // cf collection DB firebase
        return Firestore.collection('contacts').get();
    },
}

/*
{
    create: function() {},
    read: function(contact) {},
}
*/