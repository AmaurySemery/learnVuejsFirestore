import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
import fsConfig from './config';

const config = fsConfig;

const App = initializeApp(config);
const db = getFirestore(App);

export const contacts = collection(db, 'contacts')

  /*

export default {
    create(contact) {
        return App.collection('contacts').add(contact);
      },
    read() {
        // cf collection DB firebase
        return App.collection('contacts').get();
    },
}
*/
/*
{
    create: function() {},
    read: function(contact) {},
}
*/