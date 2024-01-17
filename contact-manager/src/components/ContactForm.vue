<template>
    <div>
        <h2>Créer un contact</h2>
        <form>
            <input type="text" placeholder="prénom" v-model="contact.firstName"><br>
            <input type="text" placeholder="nom" v-model="contact.lastName"><br>
            <input type="text" placeholder="email" v-model="contact.email"><br>
            <input type="text" placeholder="téléphone" v-model="contact.phone"><br>
            <button type="submit">créer</button>
        </form>
    </div>
</template>

<script>
// snippet "vdata"
    export default {
        data() {
            return {
                contact: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: ""
                }
            };
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>